module Handler.User where

import Import
import Data.List ()

-- Fetching list of users
getUsersR :: Handler Value
getUsersR = do
    users <- runDB $ selectList ([] :: [Filter User]) []
    returnJson users

-- Creating new user
postUsersR :: Handler Value
postUsersR = do
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
    requestBody <- requireJsonBody :: Handler User
    let user = requestBody { userEmail = Just "nothing" }
--    user <- runDB $ updateGet id' [requestBody]
    returnJson user

-- Removing some user
deleteUserR :: UserId -> Handler Value
deleteUserR id' = do
    ok <- runDB $ delete id'
    returnJson ok
    

