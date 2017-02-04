module Handler.Playground where

import Import
{-
import qualified Data.ByteString
import qualified Crypto.Hash.SHA256 as SHA256


encrypt :: Text -> Text
encrypt inp = digest
    where
        digest   = pack $ Data.ByteString.unpack hashed
        hashed   = hash $ Data.ByteString.pack unpacked
        unpacked = unpack inp
-}

getTestR :: Text -> Handler Value
getTestR arg = do
    let name' = toUpper arg
    let res = Category {
        categoryName =  name',
        categoryLetters = Nothing
    }
    returnJson res

