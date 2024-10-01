/*
This is where u add the title, text and images for the guide.

each guide has a main title, and guide, in the guide array there can be
as many steps as u want, but each thing need to be a obj wich type 'text' or 'img'
with 'text' data has to be just plain text and with 'img' just add the path to the image.

you can se the exmaple bellow
*/

export const guideData = [
    /*{
        title: 'Title exmaple',
        guide: [
            {type: 'text', data: 'exmaple description'},
            {type: 'img', data: 'img/exampleImage.jpg'},
            {type: 'text', data: 'Even more text woah'},
        ]
    },
    {
        title: 'Title exmaple 2',
        guide: [
            {type: 'text', data: 'exmaple description 2'},
            {type: 'img', data: 'img/exampleImage2.jpg'}
        ]
    }*/
        {
            title: 'Göra en Drop down för en kolumn',
            guide: [
                {type: 'text', data: 'Select heila område å tryck ctrl+t, tada!'},
            ]
        },
        {
            title: 'Drop down options för tabel eller liknande',
            guide: [
                {type: 'text', data: 'Väli en kolumn där du vill ha dropdown valet, sen Data tab -> data Validation -> data Validation'},
            ]
        },
        {
            title: 'Custom value',
            guide: [
                {type: 'text', data: 'Format cell Custom -> yeleinen “st” for example result in 69 st'},
            ]
        },
        {
            title: 'Sök ät ett specifikt saks pris',
            guide: [
                {type: 'text', data: '=VLOOKUP(sproduct namn; A2:E69; index åv kolumnen; TRUE)'},
            ]
        },
        {
            title: 'Allowe only some text in a kolumn in a table (data validation)',
            guide: [
                {type: 'text', data: 'Select the column, data tab -> data validation -> select List and enter one;two;tree for example.'},
            ]
        },
        {
            title: 'Räkna ihop värde med if och sum',
            guide: [
                {type: 'text', data: '=IF(parameter="Nej";pris*product_mängd;(pris*product_mängd)*0,9) deta är om sen har kampanj med 10% off'},
            ]
        },
        {
            title: 'Färgi tema cell under ett condition',
            guide: [
                {type: 'text', data: 'Välj cell, home->condition Formmating->hiligh cell rules'},
            ]
        },
        {
            title: 'Countif för att räkna hur manga som passar med en condition',
            guide: [
                {type: 'text', data: `=COUNTIF(A2:A10;"Ja") kan även användar =COUNTIFS med flrea citeria
	=COUNTIFS(E7:E17;"Nej";D7:D17;">100")
`},
            ]
        },
        {
            title: 'Sök efter product med namn med XLOOKUP',
            guide: [
                {type: 'text', data: '=XLOOKUP(product namn; var den ska kolla efter namn; vilke rad den skall returnera; optional “hitadse inte”)'},
            ]
        },
        {
            title: 'IF exmepel',
            guide: [
                {type: 'text', data: '=IF(J12<10; "Öka försäljningen"; IF(J12<30; "Helt OK";"Bra jobbat"))'},
            ]
        },
        {
            title: 'Chart',
            guide: [
                {type: 'text', data: 'Välj din table och gå in på insert tab och välj din chart'},
            ]
        },
        {
            title: 'Byta chart data på horizontal axis data',
            guide: [
                {type: 'text', data: 'Clicka på cahrten och välj filter bilden, ine på “names” taben kan du välja vad som skall visas på horizontal axis.'},
            ]
        },
        {
            title: 'Combo chart',
            guide: [
                {type: 'text', data: 'Om du har en vnalig chart, föst se till att du har 2 seris och data, höger clicka på chartet -> select data och lägg till en till I legen axis see till att namet är titlen och value är heilla columnen. Sen höger clicka på chartet  tryck på chart och gå in på “chart deign” -> change chart type -> combo.     (unit är hu mycket det ändras per number och bounds vad det grå från och till values)'},
            ]
        },
        {
            title: 'Chart style',
            guide: [
                {type: 'text', data: 'Click på chart och clicka på plus knappen för att se options vad du vill läga till för information design vis.'},
            ]
        },
        {
            title: 'Om höger axis på column och linje inte syns elder värde är fked',
            guide: [
                {type: 'text', data: 'Höger click på linje units och gå in på format axis och unit är hu mycket det ändras per number och bounds vad det grå från och till values'},
            ]
        }
]