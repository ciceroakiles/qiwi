import { firebaseDatabase } from '../utils/firebaseUtils';

class FirebaseService {
    static getDataList() {
        var itemsRef = firebaseDatabase.ref('barcodes'), dbList = [];
        itemsRef.on("child_added", function(snap) {
            snap.forEach(function(childSnap) {
                if (childSnap.key != 'type') {
                    dbList.push(childSnap.val());
                }
            });
        });
        return dbList;
    };
}

export const firebaseList = FirebaseService.getDataList();
