{-# LANGUAGE FlexibleContexts  #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE OverloadedStrings #-}

module MyAuth where

import Jose.Jwa
import Jose.Jwt
import Jose.Jws
import Data.Maybe
import Data.Either
import qualified Data.Text as T
import qualified Data.Text.Encoding as E
import Prelude (return, snd)


decrypt :: T.Text -> T.Text -> Maybe T.Text
decrypt key msg = do
    let keyBytes = E.encodeUtf8 key
    let digest = E.encodeUtf8 msg
    let Right content = hmacDecode keyBytes digest
    return (E.decodeUtf8 (snd content) )

encrypt :: T.Text -> T.Text -> Maybe T.Text
encrypt key msg = do
    let keyBytes = E.encodeUtf8 key
    let digest = E.encodeUtf8 msg
    let Right content = hmacEncode HS384 keyBytes digest
    return (E.decodeUtf8 (unJwt content) )

