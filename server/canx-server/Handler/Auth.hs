module Handler.Auth where

import Import
import Data.List ()

postAuthR :: Handler Value
postAuthR = do
    requestBody <- requireJsonBody :: Handler Credentials
    let credEmail = Just $ email requestBody
    let credPass = Just $ pass requestBody
    user <- runDB $ selectFirst [UserEmail ==. credEmail, UserPassword ==. credPass] []
    case user of
        Nothing -> sendResponseStatus status400 ("Wrong email/password" :: Text)
        Just( Entity userID userData) -> do
            let Just token = getToken userID
            addHeader "Authorization" token
            returnJson userData

