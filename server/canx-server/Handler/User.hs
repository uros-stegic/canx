module Handler.User where

import Import
import Data.List ()
import qualified Data.ByteString as BString
import qualified Data.Text as TText
import qualified Data.ByteString.Char8 as BSChar8
import qualified Data.Char as DChar

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
    addHeader "Access-Control-Expose-Headers" "authorization"
    user <- runDB $ selectFirst [UserId ==. id'] []
    returnJson user

-- Changing some user
putUserR :: UserId -> Handler Value
putUserR id' = do
    addHeader "Access-Control-Allow-Origin" "*"
    addHeader "Access-Control-Allow-Headers" "content-type, authorization"
    addHeader "Access-Control-Expose-Headers" "authorization"
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

-- CORS fix for avatar update
optionsUserAvatarR :: UserId -> Handler RepPlain
optionsUserAvatarR _ = do
    addHeader "Access-Control-Allow-Origin" "*"
    addHeader "Access-Control-Allow-Methods" "GET, POST, PUT, DELETE, OPTIONS"
    addHeader "Access-Control-Allow-Headers" "content-type, authorization"
    return $ RepPlain $ toContent ("" :: Text)

-- Updating User avatar
-- TODO: Convert base64 to something nice and write to file
putUserAvatarR :: Key User -> Handler Value
putUserAvatarR user = do
    addHeader "Access-Control-Allow-Origin" "*"
    addHeader "Access-Control-Allow-Headers" "content-type, authorization"
    addHeader "Access-Control-Expose-Headers" "authorization"
    avatar <- runDB requireJsonBody :: Handler Avatar
    let uid = TText.unpack $ TText.tail $ TText.init $ toJsonText user
    let fpath = "userResources/" ++ uid ++ ".jpg"
    {-writeFile "userResources/test.txt" (avatarContent avatar)-}
    status <- writeFile fpath (BSChar8.pack $ TText.unpack $ avatarContent avatar)
    sendResponseStatus status200 ("TODO" :: Text)

-- Writing user drawing to database.
postUserDrawingR :: UserId -> Handler Value
postUserDrawingR id' = do
    addHeader "Access-Control-Allow-Origin" "*"
    addHeader "Access-Control-Allow-Headers" "content-type, authorization"
    addHeader "Access-Control-Expose-Headers" "authorization"
    requestBody <- runDB requireJsonBody :: Handler Drawing
    _ <- runDB $ insertEntity requestBody
    sendResponseStatus status200 ("Drawing inserted" :: Text)


-- Removing some user
deleteUserR :: UserId -> Handler Value
deleteUserR id' = do
    addHeader "Access-Control-Allow-Origin" "*"
    addHeader "Access-Control-Allow-Headers" "content-type, authorization" 
    addHeader "Access-Control-Expose-Headers" "authorization"
    ok <- runDB $ delete id'
    returnJson ok
