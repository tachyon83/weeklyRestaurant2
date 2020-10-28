function Recipe(id, name, category, img, ingredients_tableId) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.img = img;
    this.ingredients_tableId = ingredients_tableId;
}
Recipe.prototype.toJSON = function () {
    return {
        recipeId: this.id,
        recipeName: this.name,
        recipeCategory: this.category,
        recipeImgPath: this.img,
        ingredients_tableId: this.ingredients_tableId,
    }
}

module.exports = [
    new Recipe(1134, '닭볶음탕', 'KOR', 'https://cloudfront.haemukja.com/vh.php?url=https://d1hk7gw6lgygff.cloudfront.net/uploads/direction/image_file/26152/pad_thumb_ch15.jpg', 'ing_3014').toJSON(),
    new Recipe(1376, '소고기콩나물비빔밥', 'KOR', 'https://cloudfront.haemukja.com/vh.php?url=https://d1hk7gw6lgygff.cloudfront.net/uploads/direction/image_file/26152/pad_thumb_ch15.jpg', 'ing_8701').toJSON(),
    new Recipe(2965, '닭칼국수', 'KOR', 'https://cloudfront.haemukja.com/vh.php?url=https://d1hk7gw6lgygff.cloudfront.net/uploads/direction/image_file/26152/pad_thumb_ch15.jpg', 'ing_3694').toJSON(),
    new Recipe(3105, '마파두부', 'CHN', 'https://cloudfront.haemukja.com/vh.php?url=https://d1hk7gw6lgygff.cloudfront.net/uploads/direction/image_file/26152/pad_thumb_ch15.jpg', 'ing_3752').toJSON()
];
