module Handler.User where

import Import
import Data.List ()

optionsUsersR :: Handler RepPlain
optionsUsersR = do
    addHeader "Access-Control-Allow-Origin" "*"
    addHeader "Access-Control-Allow-Methods" "GET, POST, PUT, DELETE, OPTIONS"
    return $ RepPlain $ toContent ("" :: Text)

-- Fetching list of users
getUsersR :: Handler Value
getUsersR = do
    users <- runDB $ selectList ([] :: [Filter User]) []
    returnJson users

-- Creating new user
postUsersR :: Handler Value
postUsersR = do
    addHeader "Access-Control-Allow-Origin" "*"
    requestBody <- runDB $ requireJsonBody :: Handler User
    user <- runDB $ insertEntity requestBody
    returnJson user

-- Fetching some user
getUserR :: UserId -> Handler Value
getUserR id' = do
    user <- runDB $ selectFirst [UserId ==. id'] []
    returnJson user

-- Changing some user
putUserR :: UserId -> Handler Value
putUserR id' = do
    person <- requireJsonBody :: Handler User
    t <- runDB $ replace id' person
    sendResponseStatus status200 ("UPDATED" :: Text)

    {-elem <- parseJsonBody requestBody-}
    {-t <- runDB $ update id' [ UserEmail =. Just "Test" ]-}
    {-t <- runDB $ update id' requestBody-}
    {-let user = requestBody-}
    {-t <- runDB $ update id' [ Update user ]-}
    {-let user = requestBody { userEmail = Just "nothing" }-}
--    user <- runDB $ updateGet id' [requestBody]
    {-returnJson t-}

-- Removing some user
deleteUserR :: UserId -> Handler Value
deleteUserR id' = do
    ok <- runDB $ delete id'
    returnJson ok
