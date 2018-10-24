import { FDatabase } from '../utils/config';

class FirebaseService {
    static getDataList() {
        var itemsRef = FDatabase.ref('barcodes'), dbList = [];
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

export const List = FirebaseService.getDataList();
