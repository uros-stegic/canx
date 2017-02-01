module Handler.Category where

import Import
import Data.List ()

-- Fetching list of users
getCategoriesR :: Handler Value
getCategoriesR = do
    categories <- runDB $ selectList ([] :: [Filter Category]) []
    returnJson categories

-- Creating new user
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

