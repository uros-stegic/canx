module Handler.Auth where

import Import
import Data.List ()

optionsAuthR :: Handler RepPlain
optionsAuthR = do
    addHeader "Access-Control-Allow-Origin" "*"
    addHeader "Access-Control-Allow-Methods" "POST, OPTIONS"
    addHeader "Access-Control-Allow-Headers" "content-type, authorization"
    addHeader "Access-Control-Expose-Headers" "authorization"
    return $ RepPlain $ toContent ("" :: Text)


postAuthR :: Handler Value
postAuthR = do
    addHeader "Access-Control-Allow-Origin" "*"
    addHeader "Access-Control-Allow-Methods" "POST, OPTIONS"
    addHeader "Access-Control-Allow-Headers" "content-type, authorization"
    addHeader "Access-Control-Expose-Headers" "authorization"
    requestBody <- requireJsonBody :: Handler Credentials
    let credEmail = Just $ email requestBody
    let credPass = Just $ password requestBody
    user <- runDB $ selectFirst [UserEmail ==. credEmail, UserPassword ==. credPass] []
    case user of
        Nothing -> sendResponseStatus status400 ("Wrong email/password" :: Text)
        Just( Entity userID userData) -> do
            let Just token = getToken userID
            addHeader "Authorization" token
            returnJson $ Entity userID userData
