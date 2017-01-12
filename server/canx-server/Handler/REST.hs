module Handler.REST where

import Import
--import Data.Text
--import Yesod.Form.Bootstrap3 (BootstrapFormLayout (..), renderBootstrap3)
--import Text.Julius (RawJS (..))
--import qualified Data.HashMap.Strict as H
--import Data.Aeson 
import Data.List ()

------------------------ MODELS ------------------------ 

instance ToJSON User where
  toJSON User {..} = object
    ["email" .= userEmail
    ,"name" .= userName
    ,"password" .= userPassword
    ,"ident" .= userIdent
    ,"avatar" .= userAvatar
    ]

-------------------------------------------------------- 

getProtectedR :: Handler Value
getProtectedR = returnJson $ myUsers
    where myUsers = [User
                       "123456"
                       (Just "john.doe@gmail.com")
                       (Just "5f4dcc3b5aa765d61d8327deb882cf99")
                       (Just "John Doe")
                       (Just "/avatars/john_doe.png")
                  ,User
                       "123457"
                       (Just "peter.smith@gmail.com")
                       (Just "5f4dcc3b5aa765d61d8327deb882cf99")
                       (Just "Peter Smith")
                       (Just "/avatars/peter_smith.png")
                  ]

getUnprotectedR :: Text -> Handler Value
getUnprotectedR uid = returnJson $
    User
        uid
        (Just "john.doe@gmail.com")
        (Just "5f4dcc3b5aa765d61d8327deb882cf99")
        (Just "John Doe")
        (Just "/avatar/john_doe.png")















