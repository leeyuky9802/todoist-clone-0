import { collection, doc, addDoc, getDocs, deleteDoc, serverTimestamp } from "firebase/firestore";
import { describe, expect, it, test } from "vitest";
import { db } from '../firebase';


test('just a test', () => {
    expect(0).toBe(0);
})


describe('reset', async () => {
    it('delete all tasks', async () => {
        const querySnapshot = await getDocs(collection(db, "tasks"));
        for (let task of querySnapshot.docs) {
            console.log(task.id);
            try {
                let result = await deleteDoc(doc(db, "tasks", task.id));
                console.log(result);
            } catch (error) {
                console.error(`Error deleting task ${task.id}: `, error);
            }
        }
    });
    it('delete all projects', async () => {
        const querySnapshot = await getDocs(collection(db, "projects"));
        for (let project of querySnapshot.docs) {
            console.log(project.id);
            try {
                let result = await deleteDoc(doc(db, "projects", project.id));
                console.log(result);
            } catch (error) {
                console.error(`Error deleting task ${project.id}: `, error);
            }
        }
    });

    it('initialize projects', async () => {
        for (let project of initProjects) {
            try {
                await addDoc(collection(db, "projects"), project);
                console.log(project.name);
            } catch (error) {
                console.error('when adding', error)
            }
        }
    });

    it('initialize tasks', async () => {
        for (let task of initTasks) {
            try {
                await addDoc(collection(db, "tasks"), task);
                console.log(task.content);
            } catch (error) {
                console.error('when adding', error)
            }
        }
    });

    
})

const initProjects = [
    {
      name: '🙌 THE OFFICE',
      projectId: 1,
      userId: 'jlIFXIwyAL3tzHMtzRbw',
      docId: 'michael-scott',
    },
    {
      name: '🚀 DAILY',
      projectId: 2,
      userId: 'jlIFXIwyAL3tzHMtzRbw',
      docId: 'daily-office',
    },
    {
      name: '🎯 FUTURE',
      projectId: 3,
      userId: 'jlIFXIwyAL3tzHMtzRbw',
      docId: 'wake-up',
    },
    {
      name: '📚 WORDS',
      projectId: 4,
      userId: 'jlIFXIwyAL3tzHMtzRbw',
      docId: 'arcade-fire',
    },
    {
      name: '🎵 MUSIC',
      projectId: 5,
      userId: 'jlIFXIwyAL3tzHMtzRbw',
      docId: 'bella-ciao',
    },
];

const initTasks = [
    {
        "content": "Finish writing report on market analysis",
        "projectId": 1,
        "timestamp": serverTimestamp()
    },
    {
        "content": "Review and edit the team's project proposal",
        "projectId": 2,
        "timestamp": serverTimestamp()
    },
    {
        "content": "Send email updates to stakeholders",
        "projectId": 3,
        "timestamp": serverTimestamp()
    },
    {
        "content": "Prepare slides for the upcoming presentation",
        "projectId": 4,
        "timestamp": serverTimestamp()
    },
    {
        "content": "Organize team meeting for project brainstorming",
        "projectId": 5,
        "timestamp": serverTimestamp()
    },
    {
        "content": "Compile feedback from client meetings",
        "projectId": 1,
        "timestamp": serverTimestamp()
    },
    {
        "content": "Update project timeline and milestones",
        "projectId": 2,
        "timestamp": serverTimestamp()
    },
    {
        "content": "Allocate resources for the new phase of the project",
        "projectId": 3,
        "timestamp": serverTimestamp()
    },
    {
        "content": "Coordinate with the design team for mockups",
        "projectId": 4,
        "timestamp": serverTimestamp()
    },
    {
        "content": "Set up a feedback session with beta testers",
        "projectId": 5,
        "timestamp": serverTimestamp()
    }
]