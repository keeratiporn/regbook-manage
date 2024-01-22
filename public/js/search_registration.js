$(document).ready(function () {

    // Check Format To Send 
    const btnSubmit = document.getElementById("btn-submit");
    btnSubmit.addEventListener('click', () => {
        let searchData = $("#search_registration").val().trim();
        if (searchData.length <= 8) {
            let validator = new RegExp('^([a-zA-Zก-ฮ0-9]{1,3})([\ |-]{1,1})([a-zA-Zก-ฮ0-9]{1,4})$', 'gi').test(searchData);

            if (validator) {
                $.ajax({
                    type: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    url: 'http://regbook.sia.co.th/search_vehicle_stock',
                    // url: '/search_vehicle_stock',
                    data: JSON.stringify({ "search": searchData }),
                    dataType: "JSON",
                    success: function (res) {
                        console.log(res)

                        $('#result-registration').css('display', 'block');
                        $('#alert-message').css('display', 'none');

                        //call fn
                        displayResults(res.data);


                    }
                });
            } else {
                $('#alert-message').css('display', 'block');
                $('#result-registration').css('display', 'none');
            }
        }
    });
    function displayResults(response) {
        const resultsContainer = document.getElementById("s_results");
        let count = 0;

        $('#s_results').empty()
        response.data.forEach(function (result) {
            // + count item
            count++;
            const resultContainer = document.createElement("div");
            resultContainer.className = "registration-container";
            console.log(result)
            const mobileContent = document.createElement("div");
            mobileContent.className = "hide-mobile";
            let formattedDateBook = !['', null, undefined].includes(result.date_books) ? 'รับเล่มได้ ' + moment(result.date_books).format('DD-MM-YYYY') : 'รอเล่มทะเบียน';

            if (result.model_sub == null || result.model_sub == "") {
                result.model_sub = "";
            }
            const formattedDateAuction = moment(result.auction_date).format('DD-MM-YYYY');

            //const DateBookStatus = formattedDateBook == null ? formattedDateBook : 'รับเล่มได้';
            mobileContent.innerHTML =
                `
            <p class="small-col">${count}</p>
            <p class="md-col">${result.regist}</p>
            <p>${result.province}</p>
            <p class="large-col">${result.chassis_number}</p>
            <p>${formattedDateAuction}</p>
            <p class="medium-col">${result.sequence}</p>
            <p>${result.product_brand}</p>
            <p>${result.model} ${result.model_sub}</p>
            <p>${result.auction_location}</p>
            <p class="big-col">${formattedDateBook}</p>
        `;

            const desktopContent = document.createElement("div");
            desktopContent.className = "hide-desktop";
            desktopContent.innerHTML =
                `
            <div class="title">No.</div>
            <div class="desc">${count}</div>
            <div class="title">ทะเบียน</div>
            <div class="desc">${result.regist}</div>
            <div class="title">จังหวัด</div>
            <div class="desc">${result.province}</div>
            <div class="title">เลขตัวถัง</div>
            <div class="desc">${result.chassis_number}</div>
            <div class="title">วันที่ประมูล</div>
            <div class="desc">${formattedDateAuction}</div>
            <div class="title">ลำดับ</div>
            <div class="desc">${result.sequence}</div>
            <div class="title">ยี่ห้อรถ</div>
            <div class="desc">${result.product_brand}</div>
            <div class="title">รุ่น</div>
            <div class="desc">${result.model} ${result.model_sub}</div>
            <div class="title">สถานที่ประมูล</div>
            <div class="desc">${result.auction_location}</div>
            <div class="title">สถานะเล่มทะเบียน</div>
            <div class="desc">${formattedDateBook}</div>
        `;

            resultContainer.appendChild(mobileContent);
            resultContainer.appendChild(desktopContent);

            resultsContainer.appendChild(resultContainer);
        });

    }
    // Get Search Registration

});