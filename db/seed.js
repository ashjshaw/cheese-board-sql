const db = require("../db/db");
const { User, Board, Cheese } = require("../models");

async function seed() {
    await db.sync({ force: true });

    const users = await User.bulkCreate([
        { name: "Ash", email: "ashley@multiverse" },
        { name: "Greg", email: "greg@multiverse" },
        { name: "Yemi", email: "yemi@multiverse" },
        { name: "Damien", email: "damien@multiverse" },
    ]);

    const cheese = await Cheese.bulkCreate([
        {
            title: "Mozzarella",
            description:
                "Mozzarella is a fresh, soft, stretched curd cheese, made with whole cow's milk.",
        },
        {
            title: "Ricotta",
            description:
                "Ricotta is a fresh, soft cheese made from sheep's, cow's, goat's or Italian water buffalo's milk.",
        },
        {
            title: "Parmigiano Reggiano",
            description:
                "Parmigiano Reggiano is made with raw, semi-skimmed milk from cows grazing on fresh grass and hay. ",
        },
        {
            title: "Gorgonzola",
            description:
                "Gorgonzola is a blue cheese, made with cow's milk and distinguished by green or blue marbling of mold. ",
        },
        {
            title: "Camembert de Normandie",
            description:
                "Camembert de Normandie is Normandy's most famous and iconic cheese is made from raw cow's milk and weighs an average of 250 grams. The flavor is intense, pungent and similar to that of mushrooms, grass and butter.",
        },
        {
            title: "Roquefort",
            description:
                "Roquefort is one of the greatest cheeses of France, made from full-fat, unpasteurized sheep's milk. It has blue veins dispersed throughout its body.",
        },
        {
            title: "Tomme",
            description:
                "Tomme is both a type of cheese and a generic term that is used to describe a flat and round cheese with a grayish natural rind. Tomme cheeses can be made with any type of milk and are produced in France.",
        },
        {
            title: "Queso Manchego",
            description:
                "Queso Manchego is a pressed cheese made from raw or pasteurized ewe's milk of the Manchega breed that grazes freely on the pastures in the provinces of Albacete, Ciudad Real, Cuenca, and Toledo.",
        },
        {
            title: "Mató",
            description:
                "Mató is a sweet, unsalted, unfermented, fresh cheese produced in the Spanish region of Catalonia. ",
        },
        {
            title: "Cabrales",
            description:
                "Cabrales is a blue cheese made from raw, unpasteurized cow's, goat's, and sheep's milk. The cheese is aged for 3 to 4 months in limestone caves in the region of Asturias in Spain. ",
        },
        {
            title: "Cheddar",
            description:
                "Cheddar is a hard cheese made from pasteurized cow's milk, and it ranges from white to pale yellow in colour.",
        },
        {
            title: "Stilton",
            description:
                "Stilton cheese is produced exclusively in the counties of Derbyshire, Nottinghamshire, and Leicestershire. It is one of the few kinds of cheese that freeze well and is affectionately called 'The King of English cheeses'.",
        },
        {
            title: "Cheshire",
            description:
                "Cheshire is an English cow's milk cheese produced in Cheshire, Flintshire, Staffordshire, Shropshire, and Denbighshire.",
        },
        {
            title: "Double Gloucester",
            description:
                "Double Gloucester is an English cheese produced in Gloucestershire, hence the name. The cheese is made with full fat cow's milk using the cream from one night's milking and also the following day's milking.",
        },
    ]);

    const boards = await Board.bulkCreate([
        { type: "Nationality", description: "French", rating: "4" },
        { type: "Nationality", description: "Spanish", rating: "2" },
        { type: "Nationality", description: "English", rating: "5" },
        { type: "Nationality", description: "Italian", rating: "4" },
    ]);

        const frenchBoard = boards[0];
        const spanishBoard = boards[1];
        const englishBoard = boards[2];
        const italianBoard = boards[3];
        const ash = await User.findByPk(1);
        const greg = await User.findByPk(2);
        const yemi = await User.findByPk(3);
        const damien = await User.findByPk(4);

    

    async function addCheesesToBoards() {
        italianBoard.addCheese(await Cheese.findByPk(1));
        italianBoard.addCheese(await Cheese.findByPk(2));
        italianBoard.addCheese(await Cheese.findByPk(3));
        italianBoard.addCheese(await Cheese.findByPk(4));
        frenchBoard.addCheese(await Cheese.findByPk(5));
        frenchBoard.addCheese(await Cheese.findByPk(6));
        frenchBoard.addCheese(await Cheese.findByPk(7));
        spanishBoard.addCheese(await Cheese.findByPk(8));
        spanishBoard.addCheese(await Cheese.findByPk(9));
        spanishBoard.addCheese(await Cheese.findByPk(10));
        englishBoard.addCheese(await Cheese.findByPk(11));
        englishBoard.addCheese(await Cheese.findByPk(12));
        englishBoard.addCheese(await Cheese.findByPk(13));
        englishBoard.addCheese(await Cheese.findByPk(14));
    }

    async function assignBoardsToUsers(){
        ash.addBoard(await Board.findByPk(1));
        yemi.addBoard(await Board.findByPk(4));
        yemi.addBoard(await Board.findByPk(2));
        damien.addBoard(await Board.findByPk(3));
    }

    await addCheesesToBoards();
    await assignBoardsToUsers();
}

    

seed();

module.exports = seed;
