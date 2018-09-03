export default class Storege {
    name = "Anon";
    nameColumn = [{
        id: "todo",
        name: 'TODO'
    },
    {
        id: 'inProgress',
        name: "In Progress"
    },
    {
        id: "testing",
        name: 'Test'},
      {  id: 'done',
        name: 'Done'
    }];
    todo = [
        {
            id: 4,
            title: "Buy milk",
            description: "2 Gallons of milk"
        },
        {
            id: 5,
            title: "Buy brod",
            description: "2 bar Brod"
        },
    ];
    inProgress = [
        {
            id: 6,
            title: "Clean House",
            description: "Soap wash and polish floor"
        }
    ];

    testing = [
        {
            id: 7,
            title: "Practice Meditation",
            description: "Use Headspace app"
        }
    ];
    done = [{}];
};
