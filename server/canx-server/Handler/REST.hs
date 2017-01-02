module Handler.REST where

import Import
import Data.Text
import Yesod.Form.Bootstrap3 (BootstrapFormLayout (..), renderBootstrap3)
import Text.Julius (RawJS (..))
import qualified Data.HashMap.Strict as H
import Data.Aeson 
import Data.List ()

------------------------ MODELS ------------------------ 
data UserC = UserC
  { uid :: Int
  , name :: Text
  , email :: Text
  , password :: Text
  , avatar :: Text
--, characters :: [Text]
  }

instance ToJSON UserC where
  toJSON UserC {..} = object
    ["uid" .= uid
    ,"name" .= name
    ,"email" .= email
    ,"password" .= password
    ,"avatar" .= avatar
    ]

-------------------------------------------------------- 

getProtectedR :: Handler Value
getProtectedR = returnJson $ myUsers
  where myUsers = [UserC 123456 "John Doe" "john.doe@ygmail.com" "5f4dcc3b5aa765d61d8327deb882cf99" "/avatars/john_doe.png"
                  ,UserC 123456 "Peter Smith" "peterSmith@ygmail.com" "5f4dcc3b5aa765d61d8327deb882cf99" "/avatars/peter_smith.png"
                  ]

getUnprotectedR :: Int -> Handler Value
getUnprotectedR id = returnJson $ UserC id "John Doe" "john.doe@ygmail.com" "5f4dcc3b5aa765d61d8327deb882cf99" "/avatars/john_doe.png"

