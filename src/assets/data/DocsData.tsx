const code = [
    'fetch("ENDPOINT URL",',
    '{',
    '	"method": "GET",',
    '	"headers": {',
    '		"x-rapidapi-host": "user-data-generator-for-polish-people.p.rapidapi.com",',
    '		"x-rapidapi-key": "YOUR RAPIDAPI KEY"',
    '	}',
    '})',
    '.then(response => {',
    '	console.log(response);',
    '})',
    '.catch(err => {',
    '	console.error(err);',
    '});',
]

const firstAnswer = [
    '[',
    '    {',
    '        "firstName": "Agata",',
    '        "lastName": "Witkowska",',
    '        "pesel": "83083027926",',
    '        "birthday": "30.08.1983",',
    '        "gender": "Kobieta"',
    '    },',
    '    {',
    '        "firstName": "Bogumila",',
    '        "lastName": "Szymczak",',
    '        "pesel": "06322853708",',
    '        "birthday": "28.12.2006",',
    '        "gender": "Kobieta"',
    '    },',
    '    {',
    '        "firstName": "Mariola",',
    '        "lastName": "Jakubowska",',
    '        "pesel": "10212040723",',
    '        "birthday": "20.01.2010",',
    '        "gender": "Kobieta"',
    '    }',
    ']',
]

const secondAnswer = [
    '[',
    '    {',
    '        "firstName": "Urszula",',
    '        "lastName": "Sobczak",',
    '        "pesel": "04241292321",',
    '        "birthday": "12.04.2004",',
    '        "gender": "Kobieta"',
    '    },',
    '    {',
    '        "firstName": "Weronika",',
    '        "lastName": "Wieczorek",',
    '        "pesel": "04212621989",',
    '        "birthday": "26.01.2004",',
    '        "gender": "Kobieta"',
    '    },',
    '    {',
    '        "firstName": "Urszula",',
    '        "lastName": "Michalska",',
    '        "pesel": "04312846482",',
    '        "birthday": "28.11.2004",',
    '        "gender": "Kobieta"',
    '    }',
    ']',
]





export { code, firstAnswer, secondAnswer }