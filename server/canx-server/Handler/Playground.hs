module Handler.Playground where

import Import
import Data.List ()
import Numeric (showIntAtBase)
import Data.Char (intToDigit)
import qualified Data.Text as T
import qualified Data.Text.Encoding as E
import qualified Crypto.Hash.SHA256 as SHA256
import qualified Data.ByteString as BS

canxHash :: Text -> Text -> Text
canxHash key str = let
    hashed = SHA256.hmac (E.encodeUtf8 key) $ (E.encodeUtf8 str)
    result = let
        stringified = BS.unpack hashed
        in foldr (\x y ->
                showIntAtBase (16 :: Int) intToDigit (fromIntegral x) ""
                ++ y
            ) "" stringified
    in T.pack result

getHashR :: Text -> Text -> Handler Value
getHashR key str = do
    let hashed = canxHash key str
    let res = Category { -- using this just to see the results of encrypt fn
        categoryName = hashed,
        categoryLetters = Just [key, str]
    }
    returnJson res

getEncR :: Text -> Text -> Handler Value
getEncR key str = do
    let Just cypher = encrypt key str
    let res = Category {
        categoryName = cypher,
        categoryLetters = Just [key, str]
    }
    returnJson res

getDecR :: Text -> Text -> Handler Value
getDecR key str = do
    let cypher = decrypt key str
    case cypher of
        Nothing -> sendResponseStatus status500 ("Wrong decryption" :: T.Text)
        Just digest -> returnJson digest

