function Profile({ size, type }) {
    return (
        <div className="Profile" size={size} type={type}>
            <header>
                <p>
                    {type === "circle" ? (
                        <img src="https://images.totalexpert.net/userfiles/282368/profile.jpg?lm=1683922699" alt="Profile Picture" width={size} style={{ borderRadius: "50%" }} height={size}/>
                    ) : (
                        <img src="https://images.totalexpert.net/userfiles/282368/profile.jpg?lm=1683922699" alt="Profile Picture" width={size} />
                    )}
                 </p>

            </header>
        </div>
    );
}

export default Profile;