const playerCreator = (nick) => {
    const name = nick;
    const talk = () => {
        console.log(name);
    }

    return talk;
}

const ronsard = playerCreator('Ronsard');

