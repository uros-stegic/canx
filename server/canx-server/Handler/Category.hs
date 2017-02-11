module Handler.Category where

import Import
import Data.List ()

optionsCategoriesR :: Handler RepPlain
optionsCategoriesR = do
    addHeader "Access-Control-Allow-Origin" "*"
    addHeader "Access-Control-Allow-Headers" "content-type, authorization"
    addHeader "Access-Control-Allow-Methods" "GET, POST, PUT, DELETE, OPTIONS"
    return $ RepPlain $ toContent ("" :: Text)

-- Fetching list of categories
getCategoriesR :: Handler Value
getCategoriesR = do
    addHeader "Access-Control-Allow-Origin" "*"
    addHeader "Access-Control-Allow-Headers" "content-type, authorization"
    addHeader "Access-Control-Expose-Headers" "authorization"
    categories <- runDB $ selectList ([] :: [Filter Category]) []
    returnJson categories

-- Creating new category
postCategoriesR :: Handler Value
postCategoriesR = do
    addHeader "Access-Control-Allow-Origin" "*"
    addHeader "Access-Control-Allow-Headers" "content-type, authorization"
    addHeader "Access-Control-Expose-Headers" "authorization"
    requestBody <- runDB $ requireJsonBody :: Handler Category
    category <- runDB $ insertEntity requestBody
    returnJson category


optionsCategoryR :: CategoryId -> Handler RepPlain
optionsCategoryR _ = do
    addHeader "Access-Control-Allow-Origin" "*"
    addHeader "Access-Control-Allow-Headers" "content-type, authorization"
    addHeader "Access-Control-Allow-Methods" "GET, POST, PUT, DELETE, OPTIONS"
    return $ RepPlain $ toContent ("" :: Text)

-- Fetching some category
getCategoryR :: CategoryId -> Handler Value
getCategoryR id' = do
    addHeader "Access-Control-Allow-Origin" "*"
    addHeader "Access-Control-Allow-Headers" "content-type, authorization"
    addHeader "Access-Control-Expose-Headers" "authorization"
    category <- runDB $ selectFirst [CategoryId ==. id'] []
    returnJson category

-- TODO: This solution requires a whole object to be sent.
putCategoryR :: CategoryId -> Handler Value
putCategoryR id' = do
    addHeader "Access-Control-Allow-Origin" "*"
    addHeader "Access-Control-Allow-Headers" "content-type, authorization"
    addHeader "Access-Control-Expose-Headers" "authorization"
    category <- requireJsonBody :: Handler Category
    runDB $ replace id' category
    returnJson category

-- Removing some category
deleteCategoryR :: CategoryId -> Handler Value
deleteCategoryR id' = do
    addHeader "Access-Control-Allow-Origin" "*"
    addHeader "Access-Control-Allow-Headers" "content-type, authorization"
    addHeader "Access-Control-Expose-Headers" "authorization"
    ok <- runDB $ delete id'
    returnJson ok
