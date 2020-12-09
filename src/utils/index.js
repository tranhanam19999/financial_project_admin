const sources = [
    "/vendor/jquery/jquery.min.js",
    "/vendor/bootstrap/js/bootstrap.bundle.min.js",
    "/vendor/jquery-easing/jquery.easing.min.js",
    "/js/sb-admin-2.min.js",
    "/vendor/datatables/jquery.dataTables.min.js",
    "/vendor/datatables/dataTables.bootstrap4.min.js",
    "/js/demo/datatables-demo.js"
]
//     "/vendor/chart.js/Chart.min.js",
//     "/js/demo/chart-area-demo.js",
//     "/js/demo/chart-pie-demo.js"
// ]

const loadScripts = () => {
    const externalScripts = document.getElementById('external-scripts')
    externalScripts.innerHTML = ''
    Promise.all(sources.map(src => {
        return new Promise((resolve, reject) => {
            try {
                let script = document.createElement('script')
                script.src = src
                script.async = false
                script.defer = true
                externalScripts.appendChild(script)
                resolve()
            }
            catch(err) { reject(err) }
        })  
    }))
}

export {loadScripts}