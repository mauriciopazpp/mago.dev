import { doc, getDoc} from "firebase/firestore"; 
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const getOnlySecondLevel = async (table) => {
    if (!table) {
        console.error('Error, table not defined to fetch data.');
    }
    return await getDoc(doc(db, table, table))
        .then(docSnap => {
            if (!docSnap.exists()) {
                return;
            }

            return docSnap.data();
        })
        .then(response => response);
}

const getOnlyFirstLevel = async (table) => {
    if (!table) {
        console.error('Error, table not defined to fetch data.');
    }
    const q = query(collection(db, table), where("id", '!=', null));
    const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        console.log('getOnlyFirstLevel', doc.id, " => ", doc.data());
    });
}

const getAll = async (table) => {
    if (!table) {
        console.error('Error, table not defined to fetch data.');
    }
    const querySnapshot = await getDocs(collection(db, table));
        querySnapshot.forEach((doc) => {
        console.log('getAll', doc.id, " => ", doc.data());
    });
}

export { getOnlySecondLevel, getOnlyFirstLevel, getAll };
