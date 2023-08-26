import { Timestamp } from "firebase/firestore"
import { AiFillCalendar, AiOutlineCalendar, AiOutlineDropbox } from "react-icons/ai";
import { ImCheckboxChecked } from "react-icons/im";

export const initProjects = [
    {
      name: '🙌 THE OFFICE',
      projectId: 1
    },
    {
      name: '🚀 DAILY',
      projectId: 2
    },
    {
      name: '🎯 FUTURE',
      projectId: 3
    },
    {
      name: '📚 WORDS',
      projectId: 4
    },
    {
      name: '🎵 MUSIC',
      projectId: 5
    },
];

export const collatedTasks =[
    {
        name: 'Today',
        id: 0,
        icon: AiFillCalendar
    },
    {
        name: 'Schedule',
        id: -1,
        icon: AiOutlineCalendar
    },
    {
        name: 'All',
        id: -2,
        icon: AiOutlineDropbox
    },
    {
        name: 'Completed',
        id: -3,
        icon: ImCheckboxChecked
    }
]

export const initTasks = [
    {
        "content": "Complete financial analysis for Q3",
        "projectId": 2,
        "scheduled": true,
        "dueDate": Timestamp.fromDate(new Date('August 18, 2023')),
        "completed": false
    },
    {
        "content": "Draft proposal for new marketing strategy",
        "projectId": 4,
        "scheduled": false,
        "dueDate": null,
        "completed": true
    },
    {
        "content": "Review software documentation",
        "projectId": 1,
        "scheduled": true,
        "dueDate": Timestamp.fromDate(new Date('August 20, 2023')),
        "completed": false
    },
    {
        "content": "Prepare slides for Monday's presentation",
        "projectId": 5,
        "scheduled": false,
        "dueDate": null,
        "completed": false
    },
    {
        "content": "Coordinate with design team on new product visuals",
        "projectId": 3,
        "scheduled": true,
        "dueDate": Timestamp.fromDate(new Date('August 22, 2023')),
        "completed": true
    },
    {
        "content": "Update customer feedback spreadsheet",
        "projectId": 2,
        "scheduled": true,
        "dueDate": Timestamp.fromDate(new Date('August 24, 2023')),
        "completed": true
    },
    {
        "content": "Attend project kickoff meeting",
        "projectId": 4,
        "scheduled": false,
        "dueDate": null,
        "completed": true
    },
    {
        "content": "Research on latest industry trends",
        "projectId": 5,
        "scheduled": true,
        "dueDate": Timestamp.fromDate(new Date('August 15, 2023')),
        "completed": false
    },
    {
        "content": "Finalize contract details with new vendor",
        "projectId": 3,
        "scheduled": true,
        "dueDate": Timestamp.fromDate(new Date('August 28, 2023')),
        "completed": false
    },
    {
        "content": "Organize team building activity",
        "projectId": 1,
        "scheduled": false,
        "dueDate": null,
        "completed": true
    }
];