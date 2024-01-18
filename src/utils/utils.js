function calculateStars(star, halfStar, emptyStar) {
    let starElements = [];

    for (let i = 0; i < star; i++) {
        starElements.push(<img src="./pictures/star.png" alt="star" className="star" />)
    }
    
    for (let i = 0; i < halfStar; i++) {
        starElements.push(<img src="./pictures/star-half-empty.png" alt="half-star" className="halfStar" />)
    }

    for (let i = 0; i < emptyStar; i++) {
        starElements.push(<img src="/pictures/empty-star.png" alt="emptyStar" />)
    }

    return starElements;
}

export default calculateStars;