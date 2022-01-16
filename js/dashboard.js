$('.counter-up').counterUp({
    delay: 10,
    time: 1000
})

let dateArr = ['jul 21', 'jul 20', 'jul 19', 'jul 18', 'jul 17', 'jul 16', 'jul 15', 'jul 14', 'jul 13', 'jul 12', 'jul 11'];
let orderCountArr = [7, 5, 6, 4, 6, 4, 8, 6, 8, 9, 6];
let viewerCountArr = [13, 12, 15, 14, 28, 17, 19, 16, 23, 33, 16];

var labels = dateArr

var data = {
    labels: labels,
    datasets: [

        {
            label: 'Order count',
            backgroundColor: '#007bff60',
            borderColor: '#007bff;',
            data: orderCountArr,
            tension: 0.25,

        },

        {
            label: 'View count',
            backgroundColor: '#28a74560',
            borderColor: '#28a745;',
            data: viewerCountArr,
            tension: 0.25,

        }

    ]
};

var config = {

    type: 'line',
    data: data,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                gridLines: [
                    { display: false }
                ]
            }]
        },
        legend:

        {
            display: true,
            position: 'top',
            labels: {
                fontColor: "#000",
                usePointStyle: true,
            }
        }


    }
};


var ordersNvisitors = new Chart(
    document.getElementById('ordersNvisitors'),
    config
);

let orderFromPlace = [5, 15, 4, 9, 7];
let places = ["YGN", "MDY", "NPY", "SHAN", "MGW"];

var data = {
    labels: places,
    datasets: [{
        label: 'My First Dataset',
        data: orderFromPlace,
        backgroundColor: [
            'rgba(255, 99, 132)',
            'rgba(54, 162, 235)',
            'rgba(245, 205, 83)',
            'rgba(54, 122, 235)',
            'rgba(225, 145, 88)',
        ],
        hoverOffset: 4
    }]
};

var config = {
    type: 'doughnut',
    data: data,
    options: {
        legend:

        {
            display: true,
            position: 'bottom',
            labels: {
                fontColor: "#000",
                usePointStyle: true,
            }
        }

    }
};
var orderPlaces = new Chart(
    document.getElementById('orderPlaces'),
    config
);