export function getImageUrl(imageId, size = 's') {
    return (
        'https://i.imgur.com/' +
        imageId +
        size +
        '.jpg'
    );
}

export function getProfileInfo() {
    return (
        [
        {   id:1,
            name: "Maria Skłodowska-Curie",
            age: 30,
        },

        {
            id: 2,
            name: "Katsuko Saruhashi",
            age: 28,
        }
        ]
    )
}
