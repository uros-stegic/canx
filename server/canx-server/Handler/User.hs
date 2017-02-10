module Handler.User where

import Import
import Data.List ()
import qualified Data.ByteString as BString

-- CORS fix for all users
optionsUsersR :: Handler RepPlain
optionsUsersR = do
    addHeader "Access-Control-Allow-Origin" "*"
    addHeader "Access-Control-Allow-Methods" "GET, POST, PUT, DELETE, OPTIONS"
    addHeader "Access-Control-Allow-Headers" "content-type, authorization"
    return $ RepPlain $ toContent ("" :: Text)

-- Fetching list of users
getUsersR :: Handler Value
getUsersR = do
    addHeader "Access-Control-Allow-Origin" "*"
    addHeader "Access-Control-Allow-Headers" "content-type, authorization"
    users <- runDB $ selectList ([] :: [Filter User]) []
    returnJson users

-- CORS fix for single user
optionsUserR :: UserId -> Handler RepPlain
optionsUserR _ = do
    addHeader "Access-Control-Allow-Origin" "*"
    addHeader "Access-Control-Allow-Methods" "GET, POST, PUT, DELETE, OPTIONS"
    addHeader "Access-Control-Allow-Headers" "content-type, authorization"
    return $ RepPlain $ toContent ("" :: Text)

-- Creating new user
postUsersR :: Handler Value
postUsersR = do
    addHeader "Access-Control-Allow-Origin" "*"
    addHeader "Access-Control-Allow-Headers" "content-type, authorization"
    addHeader "Access-Control-Expose-Headers" "authorization"
    requestBody <- runDB $ requireJsonBody :: Handler User
    user <- runDB $ insertEntity requestBody
    case user of
        Entity userID userData -> do
            let Just token = getToken userID
            addHeader "Authorization" token
            returnJson $ Entity userID userData

-- Fetching some user
getUserR :: UserId -> Handler Value
getUserR id' = do
    addHeader "Access-Control-Allow-Origin" "*"
    addHeader "Access-Control-Allow-Headers" "content-type, authorization"
    user <- runDB $ selectFirst [UserId ==. id'] []
    returnJson user

-- Changing some user
putUserR :: UserId -> Handler Value
putUserR id' = do
    addHeader "Access-Control-Allow-Origin" "*"
    addHeader "Access-Control-Allow-Headers" "content-type, authorization"
    person <- requireJsonBody :: Handler User
    _ <- runDB $ replace id' person
    sendResponseStatus status200 ("UPDATED" :: Text)

    {-elem <- parseJsonBody requestBody-}
    {-t <- runDB $ update id' [ UserEmail =. Just "Test" ]-}
    {-t <- runDB $ update id' requestBody-}
    {-let user = requestBody-}
    {-t <- runDB $ update id' [ Update user ]-}
    {-let user = requestBody { userEmail = Just "nothing" }-}
--    user <- runDB $ updateGet id' [requestBody]
    {-returnJson t-}

-- Updating User avatar
putUserAvatarR :: UserId -> Handler Value
putUserAvatarR id' = do
    {-user <- runDB $ selectFirst [UserId ==. id'] []-}
    {-let uid = show user-}
    -- TODO: Transform id' into a normal id
    let fpath = "userResources/" ++ show id' ++ ".jpg"
    status <- writeFile fpath (BString.empty)
    sendResponseStatus status200 ("TODO" :: Text)

-- Removing some user
deleteUserR :: UserId -> Handler Value
deleteUserR id' = do
    addHeader "Access-Control-Allow-Origin" "*"
    addHeader "Access-Control-Allow-Headers" "content-type, authorization"
    ok <- runDB $ delete id'
    returnJson ok
