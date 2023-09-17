const cookieToken = (user, res) => {
    const token = user.getJwtToken();

    const options = {
        expires: new Date( 
            Date.now() + 3 * 24 * 60 * 60 * 1000
        ),
        secure: true,
        SameSite: 'None',
        httpOnly: true
    };

    // const options = {
    //     expires: new Date( 
    //         Date.now() + 3 * 24 * 60 * 60 * 1000
    //     ),
    //     httpOnly: true
    // };

    // we don't want to see password
    user.password = undefined;

    res.status(200).cookie('token', token, options).json({
        success: true,
        token,
        user
    });
};

module.exports = cookieToken;