module Handler.Category where

import Import
import Data.List ()

optionsCategoriesR :: Handler RepPlain
optionsCategoriesR = do
    addHeader "Access-Control-Allow-Origin" "*"
    addHeader "Access-Control-Allow-Methods" "GET, POST, PUT, DELETE, OPTIONS"
    return $ RepPlain $ toContent ("" :: Text)

-- Fetching list of categories
getCategoriesR :: Handler Value
getCategoriesR = do
    addHeader "Access-Control-Allow-Origin" "*"
    categories <- runDB $ selectList ([] :: [Filter Category]) []
    returnJson categories

-- Creating new category
postCategoriesR :: Handler Value
postCategoriesR = do
    requestBody <- runDB $ requireJsonBody :: Handler Category
    category <- runDB $ insertEntity requestBody
    returnJson category

-- Fetching some category
getCategoryR :: CategoryId -> Handler Value
getCategoryR id' = do
    category <- runDB $ selectFirst [CategoryId ==. id'] []
    returnJson category

-- TODO: This solution requires a whole object to be sent.
putCategoryR :: CategoryId -> Handler Value
putCategoryR id' = do
    category <- requireJsonBody :: Handler Category
    runDB $ replace id' category
    returnJson category

-- Removing some category
deleteCategoryR :: CategoryId -> Handler Value
deleteCategoryR id' = do
    ok <- runDB $ delete id'
    returnJson ok
