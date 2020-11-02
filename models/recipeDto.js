// recipeDto

var recipeDto = {
    id: 1135,
    contents: {
        name: '닭볶음탕',
        category: 'KOR',
        img: 'https://~',
    },
    ingredients: {
        id: 'ing_123',
        contents: {
            meats: {
                id: 'meat_123',
                // 여기는 특별히 배열임
                contents: [
                    { name: '닭고기', amount: 3, unit: '마리' },
                    { name: '소고기', amount: 1, unit: '마리' },
                ]
            },
            fishes: {
                id: 'fish_123',
                contents: [
                    { name: '참치', },//이하 생략
                    { name: '고등어', amount: 1, unit: '마리' }
                ]
            },
            miscs: {
                // 같은양식..
            }
        }
    }
}