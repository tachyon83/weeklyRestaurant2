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
    new Recipe(2317, '멸치국수', 'KOR', 'https://cdn.pixabay.com/photo/2015/04/06/16/32/if-709614__340.jpg', 'ing_156').toJSON(),
    new Recipe(3105, '마파두부', 'CHN', 'https://cloudfront.haemukja.com/vh.php?url=https://d1hk7gw6lgygff.cloudfront.net/uploads/direction/image_file/1168/pad_thumb_m.png&convert=jpgmin&rt=600', 'ing_3752').toJSON(),
    new Recipe(2965, '닭칼국수', 'KOR', 'https://imagescdn.gettyimagesbank.com/500/201708/a10968180.jpg', 'ing_3694').toJSON(),
    new Recipe(1376, '소고기콩나물비빔밥', 'KOR', 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F143948354FB8FDF6296B73', 'ing_8701').toJSON(),
    new Recipe(806, '순대국밥', 'KOR', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyOmrqbHnyUqJfVUMxY6l_my0eyw_twRPGEw&usqp=CAU', 'ing_1737').toJSON(),
    new Recipe(504, '짜장면', 'CHN', 'https://recipe1.ezmember.co.kr/cache/recipe/2016/07/02/40c4f639ca973d9acccecdf7cbe0cbc41.jpg', 'ing_1738').toJSON(),
    new Recipe(486, '유산슬밥', 'CHN', 'https://www.sk5.co.kr/img_src/s600/a897/a8970355.jpg', 'ing_1739').toJSON(),
    new Recipe(321, '돈까스', 'WES', 'http://cdn.011st.com/11dims/resize/600x600/quality/75/11src/pd/20/1/4/9/3/1/8/yVdYI/2827149318_B.jpg', 'ing_1740').toJSON(),
    new Recipe(333, '해물파스타', 'WES', 'https://recipe1.ezmember.co.kr/cache/recipe/2015/06/08/f368e4342174431947ba86ea4ec0fe28.jpg', 'ing_1741').toJSON(),
    new Recipe(4238, '햄버그스테이크', 'WES', 'http://image.gsshop.com/image/55/31/55314791_L1.jpg', 'ing_1742').toJSON(),
];
