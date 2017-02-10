{-# LANGUAGE FlexibleContexts  #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE OverloadedStrings #-}

module MyAuth where

import Jose.Jwa
import Jose.Jws
import Jose.Jwt
import Data.Maybe
import Data.Either
import qualified Data.Text as T
import qualified Data.Text.Encoding as E
import Prelude (return, ($), (<$>), (<*>), fail)
import Data.Aeson
import Model
import Database.Persist


data Credentials = Credentials {
    email :: T.Text,
    password :: T.Text
}

instance ToJSON Credentials where
    toJSON (Credentials email password) = object ["email" .= email, "password" .= password]

instance FromJSON Credentials where
    parseJSON (Object o) = Credentials
        <$> o .: "email"
        <*> o .: "password"
    parseJSON _ = fail "Cannot parse this"

decryptHelper :: Either JwtError Jws -> Maybe T.Text
decryptHelper (Left (_)) = Nothing
decryptHelper (Right (JwsHeader _ _ _ _, content)) = Just $ E.decodeUtf8 content

decrypt :: T.Text -> T.Text -> Maybe T.Text
decrypt key msg = let
    keyBytes = E.encodeUtf8 key
    digest = E.encodeUtf8 msg
    content = hmacDecode keyBytes digest
    in decryptHelper content

encrypt :: T.Text -> T.Text -> Maybe T.Text
encrypt key msg = do
    let keyBytes = E.encodeUtf8 key
    let digest = E.encodeUtf8 msg
    let Right content = hmacEncode HS384 keyBytes digest
    return $ E.decodeUtf8 $ unJwt content

getToken :: Key User -> Maybe T.Text
getToken user = encrypt (T.pack "canx_secret_key") $ toJsonText user
