// Making Bank Data// 
const bankhlist = document.querySelector('#bankhlist');
const Bkashhlist = document.querySelector('#bkashhlist');

// render data
var Serial = 1;
var Serial2 = 1;

function renderdata(element) {

    if (element.data().transectionType == 'bank') {
        if (element.data().requestStatus != 'pending') {
            console.log(element.data().requestStatus);
            let li = document.createElement('tr');
            let SL = document.createElement('td');
            SL.style.width = '60px';
            let Name = document.createElement('td');
            let FatherName = document.createElement('td');
            let Phone = document.createElement('td');
            let DateOfBirth = document.createElement('td');
            let Address = document.createElement('td');
            let HousingSavingNo = document.createElement('td');
            let Acc_h_name = document.createElement('td');
            let Acc_num = document.createElement('td');
            let BankName = document.createElement('td');
            let BranchName = document.createElement('td');
            let Chequecol = document.createElement('td');
            let cheque = document.createElement('a');
            cheque.href = element.data().requisitionChequePhotoUrl;
            let div = document.createElement('div');
            // let chequeFrame = document.createElement('img');
            cheque.classList.add('Nid');
            div.classList.add('box');
            //  chequeFrame.style.width = '250px';
            // chequeFrame.style.height = '200px';
            // chequeFrame.src = element.data().requisitionChequePhotoUrl;

            /////////////////////////


            //////////////////////////
            let Status = document.createElement('td');
            let adminmessage = document.createElement('td');


            li.setAttribute('row-id', element.id);
            SL.textContent = Serial;

            Name.textContent = element.data().name;
            FatherName.textContent = element.data().fatherName;
            Phone.textContent = element.data().phone;
            DateOfBirth.textContent = element.data().dateOfBirth;
            Address.textContent = element.data().address;
            HousingSavingNo.textContent = element.data().housingnumber;
            Acc_h_name.textContent = element.data().accountHolderName;
            Acc_num.textContent = element.data().accountNumber;
            BankName.textContent = element.data().nameOftheBank;
            BranchName.textContent = element.data().branceName;
            cheque.textContent = element.data().requisitionChequePhotoUrl;
            Status.textContent = element.data().requestStatus;
            adminmessage.textContent = element.data().adminMsg;
            li.appendChild(SL);
            li.appendChild(Name);
            li.appendChild(FatherName);
            li.appendChild(Phone);
            li.appendChild(DateOfBirth);
            li.appendChild(Address);
            li.appendChild(HousingSavingNo);
            li.appendChild(Acc_h_name);
            li.appendChild(Acc_num);
            li.appendChild(BankName);
            li.appendChild(BranchName);
            //////////////////// front/////////
            Chequecol.appendChild(cheque);
            Chequecol.appendChild(div);
            //  div.appendChild(chequeFrame);
            li.appendChild(Chequecol);
            //////////////////////back
            li.appendChild(Status);
            li.appendChild(adminmessage);
            bankhlist.appendChild(li);
            Serial++;
        }
    }
    //////            bkash
    else if (element.data().transectionType == 'bkash') {
        if (element.data().requestStatus != 'pending') {

            let li = document.createElement('tr');
            let SL = document.createElement('td');
            SL.style.width = '60px';
            let Name = document.createElement('td');
            let FatherName = document.createElement('td');
            let Phone = document.createElement('td');
            let DateOfBirth = document.createElement('td');
            let Address = document.createElement('td');
            let HousingSavingNo = document.createElement('td');
            let bkashNo = document.createElement('td');
            let Chequecol = document.createElement('td');
            let cheque = document.createElement('a');
            cheque.href = element.data().requisitionChequePhotoUrl;
            let div = document.createElement('div');
            //let chequeFrame = document.createElement('img');
            cheque.classList.add('Nid');
            div.classList.add('box');
            // chequeFrame.style.width = '250px';
            // chequeFrame.style.height = '200px';
            // chequeFrame.src = element.data().requisitionChequePhotoUrl;


            let Status = document.createElement('td');
            let adminmessage = document.createElement('td');
            li.setAttribute('row-id', element.id);
            SL.textContent = Serial2;

            Name.textContent = element.data().name;
            FatherName.textContent = element.data().fatherName;
            Phone.textContent = element.data().phone;
            DateOfBirth.textContent = element.data().dateOfBirth;
            Address.textContent = element.data().address;
            HousingSavingNo.textContent = element.data().housingnumber;
            bkashNo.textContent = element.data().bkashNumber;
            Status.textContent = element.data().requestStatus;
            cheque.textContent = element.data().requisitionChequePhotoUrl;
            adminmessage.textContent = element.data().adminMsg;
            li.appendChild(SL);
            li.appendChild(Name);
            li.appendChild(FatherName);
            li.appendChild(Phone);
            li.appendChild(DateOfBirth);
            li.appendChild(Address);
            li.appendChild(HousingSavingNo);
            li.appendChild(bkashNo);
            ///////////////// front/////////
            Chequecol.appendChild(cheque);
            Chequecol.appendChild(div);
            //div.appendChild(chequeFrame);
            li.appendChild(Chequecol);
            //////////////////////back
            li.appendChild(Status);
            li.appendChild(adminmessage);
            Bkashhlist.appendChild(li);
            Serial2++;
        }
    }
}
// end bank data render


db.collection('requisition').get().then((snapshot) => {
    console.log(snapshot.docs);
    snapshot.docs.forEach(element => {
        console.log(element.data())
        renderdata(element);
    });
})