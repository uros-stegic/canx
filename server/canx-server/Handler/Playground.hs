module Handler.Playground where

import Import
import Numeric (showIntAtBase)
import Data.Char (intToDigit)
import qualified Data.Text as T
import qualified Data.Text.Encoding as E
import qualified Crypto.Hash.SHA256 as SHA256
import qualified Data.ByteString as BS


encrypt :: Text -> Text -> Text
encrypt key str = let
    hashed = SHA256.hmac (E.encodeUtf8 key) $ (E.encodeUtf8 str)
    result = let
        stringified = BS.unpack hashed
        in foldr (\x y ->
                showIntAtBase (16 :: Int) intToDigit (fromIntegral x) ""
                ++ y
            ) "" stringified
    in T.pack result
{-
divide' :: String -> [String]
divide' "" = []
divide' (c1:c2:cs) = [(c1:[c2])] ++ (divide' cs)

divide'' :: Text -> [Text]
divide'' t = T.pack $ divide' $ T.unpack t

decrypt :: Text -> Text -> Text
decrypt key digest = key ++ digest
-}
getEncR :: Text -> Text -> Handler Value
getEncR key str = do
    let hashed = encrypt key str
    let res = Category { -- using this just to see the results of encrypt fn
        categoryName = hashed,
        categoryLetters = Just [key, str]
    }
    returnJson res

getDecR :: Text -> Text -> Handler Value
getDecR key hashed = do
    let dehashed = encrypt key hashed
    let res = Category {
        categoryName = dehashed,
        categoryLetters = Just [key, hashed]
    }
    returnJson res

