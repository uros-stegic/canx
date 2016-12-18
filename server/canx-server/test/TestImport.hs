module TestImport
    ( module TestImport
    , module X
    ) where

import Application              (makeFoundation, makeLogWare)
#if MIN_VERSION_classy_prelude(1, 0, 0)
import ClassyPrelude            as X hiding (delete, deleteBy, Handler)
#else
import ClassyPrelude            as X hiding (delete, deleteBy)
#endif
import Database.Persist         as X hiding (get)
import Database.Persist.MongoDB hiding (master)
import Foundation               as X
import Model                    as X
import Settings                 (appDatabaseConf)
import Test.Hspec               as X
import Yesod.Default.Config2    (useEnv, loadYamlSettings)
import Yesod.Auth               as X
import Yesod.Test               as X
-- Wiping the test database
import Database.MongoDB.Query (allCollections)
import Database.MongoDB.Admin (dropCollection)
import Control.Monad.Trans.Control (MonadBaseControl)

runDB :: Action IO a -> YesodExample App a
runDB query = do
    app <- getTestYesod
    liftIO $ runDBWithApp app query

runDBWithApp :: App -> Action IO a -> IO a
runDBWithApp app query = do
    liftIO $ runMongoDBPool
        (mgAccessMode $ appDatabaseConf $ appSettings app)
        query
        (appConnPool app)

withApp :: SpecWith (TestApp App) -> Spec
withApp = before $ do
    settings <- loadYamlSettings
        ["config/test-settings.yml", "config/settings.yml"]
        []
        useEnv
    foundation <- makeFoundation settings
    wipeDB foundation
    logWare <- liftIO $ makeLogWare foundation
    return (foundation, logWare)

-- This function will wipe your database.
-- 'withApp' calls it before each test, creating a clean environment for each
-- spec to run in.
wipeDB :: App -> IO ()
wipeDB app = void $ runDBWithApp app dropAllCollections

dropAllCollections :: (MonadIO m, MonadBaseControl IO m) => Action m [Bool]
dropAllCollections = allCollections >>= return . filter (not . isSystemCollection) >>= mapM dropCollection
      where
        isSystemCollection = isPrefixOf "system."

-- | Authenticate as a user. This relies on the `auth-dummy-login: true` flag
-- being set in test-settings.yaml, which enables dummy authentication in
-- Foundation.hs
authenticateAs :: Entity User -> YesodExample App ()
authenticateAs (Entity _ u) = do
    request $ do
        setMethod "POST"
        addPostParam "ident" $ userIdent u
        setUrl $ AuthR $ PluginR "dummy" []

-- | Create a user.
createUser :: Text -> YesodExample App (Entity User)
createUser ident = do
    runDB $ insertEntity User
        { userIdent = ident
        , userPassword = Nothing
        }
