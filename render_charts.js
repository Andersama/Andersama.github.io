
//import { Chart } from 'chart.js';
//import { BoxPlotController, BoxAndWiskers } from '@sgratzl/chartjs-chart-boxplot';
//import './chart.js';
//import { BoxPlotController } from './chartjs_boxplot.js';
//import * from './chartjs_chart_boxplot.js';//'@sgratzl/chartjs-chart-boxplot';
//import './chartjs_chart_boxplot.js';
//import { BoxPlotChart } from '@sgratzl/chartjs-chart-boxplot';
//Chart.register(BoxPlotController);
//import { Chart } from '$lib/util/chart.js';
//import * from '@sgratzl/chartjs-chart-boxplot';

  //t = prenode, e = label, a = labels, s = data, r = background color, n = border color
/*
  function create_boxplot(t, e, a, s, r, n) {
      let l = document.createElement("canvas");
      t.parentNode.parentNode.insertBefore(l, t.parentNode.nextSibling),
      l.classList.add("bar_chart");
      let o = l.getContext("2d");
      new Chart(o,{
          type: "boxplot",
          data: {
              labels: a,
              datasets: [{
                  label: e,
                  data: s,
                  borderWidth: 1,
                  borderColor: n,
                  backgroundColor: r,
                  padding: 10,
                  itemRadius: 2
              }]
          },
          options: {
              responsive: !0,
              indexAxis: "y",
              scales: {
                  x: {
                      beginAtZero: !1
                  }
              },
              plugins: {},
              minStats: "whiskerMin",
              maxStats: "whiskerMax"
          }
      })
  }

function make_chartjs_bar_chart(canvas_node, title, labels, points) {
    console.log("Adding graph: ", title);
    new Chart(canvas_node, {
        type: 'boxplot', //boxplot
        data: {
            labels: labels,
            datasets: [{
                label: title,
                data: points,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
    //console.log("Added graph at", canvas_node);
}

function make_chartjs_single_box_chart(canvas_node, title, labels, points) {
    //console.log("Adding graph: ", title);

      //t = prenode, e = label, a = labels, s = data, r = background color, n = border color
    let e = title;
    let a = labels;
    let s = points;
    //let r = "white";
    //let n = "white";
    let r = undefined;
    let n = undefined;

    console.log(title,labels,points);

    let chart = new Chart(canvas_node, {
        type: "boxplot", //boxplot
        data: {
            labels: a,
            datasets: [{
                label: e,
                data: s,
                borderWidth: 1,
                borderColor: n,
                backgroundColor: r,
                padding: 10,
                itemRadius: 2
            }]
        },
        options: {
            responsive: !0,
            indexAxis: "y",
            scales: {
                x: {
                    beginAtZero: !1
                }
            },
            plugins: {},
            minStats: "whiskerMin",
            maxStats: "whiskerMax"
        }
    });
    console.log("Added graph at ", canvas_node);
    return chart;
}
*/
/*
{
    label: e,
    data: s, //num[]
    borderWidth: 1,
    borderColor: n,
    backgroundColor: r,
    padding: 10,
    itemRadius: 2
}
*/
function make_chartjs_boxchart(canvas_node, all_labels, all_datasets) {
    console.log(all_labels,all_datasets);

    if (all_labels.length != all_datasets.length) {
        console.log("Mismatch of labels to datasets!")
        return;
    }

    let chart = new Chart(canvas_node, {
        type: "boxplot", //bar
        data: {
            labels: all_labels,
            datasets: all_datasets
        },
        options: {
            /*
            responsive: false, //!0
            indexAxis: "y",
            scales: {
                x: {
                    beginAtZero: !1
                }
            },
            plugins: {},
            */
            minStats: "whiskerMin",
            maxStats: "whiskerMax",
            plugins: {
                deferred: {
                    yOffset: '50%',
                    delay:   500
                }
            }
        }
    });
    console.log("Added graph at ", canvas_node);
    return chart;
}

function render_charts() {
//Chart.register();
    let benchmark_blocks = Array.from(document.querySelectorAll("code.language-undefined"));
    benchmark_blocks.forEach(function (node) {
        let benchmark_start = node.innerText.indexOf("|               ns/op |                op/s |    err% |     total |");
        if (benchmark_start >= 0) {
            let lines = node.innerText.split('\n');
            //console.log(lines);
            let i = 0;
            let row = 0;
            let graph = undefined;
            let graphs = [];
            let graph_i = 0;
            let scan_node = node.parentNode;
            let datasets = [];
            let labels = [];

            // Find canvas elements following <pre><code></code></pre> block
            while(scan_node?.nextElementSibling) {
                if (scan_node.nextElementSibling?.tagName && scan_node.nextElementSibling.tagName.toLowerCase() == 'canvas') {
                    graphs.push(scan_node.nextElementSibling);
                }
                if (scan_node.nextElementSibling?.tagName && scan_node.nextElementSibling.tagName.toLowerCase()  == 'pre') {
                    break;
                }
                scan_node = scan_node.nextElementSibling;
            }
            console.log("Graphs: ", graphs);

            let title = "";

            for (let line of lines) {
                if (line[0] != '|' || line.startsWith("|-")) {
                    continue;
                }

                let entry = line.split('|').map((item)=>item.trim());

                /* Start a new graph, render previous */
                if (line.startsWith("|               ns/op |                op/s |    err% |     total |")) {
                    console.log("Start of nanobenchmark at line ", i);
                    row = 0;
                    title = entry[5];
                    if (graph_i < graphs.length) {
                        if (graph_i > 0) {
                            graph  = graphs[graph_i-1];
                            //make_chartjs_box_chart(graph, title, labels, points);
                            make_chartjs_boxchart(graph, labels, datasets);
                            labels   = [];
                            datasets = [];
                        }
                        graph_i++;
                    }
                    continue;
                }

                /* Extract Data */
                let point = parseFloat(entry[2].replaceAll(",",""));
                let name  = entry[5].split('`')[1];
                let category = "";
                if (name.indexOf('"') >= 0) {
                    category = name.split('"')[1];
                }
                
                let label_idx = labels.indexOf(name);
                if (label_idx < 0) {
                    label_idx = labels.length;
                    labels.push(name);

                    datasets.push({
                        label: name,
                        data: [],
                        //borderWidth: 1,
                        //borderColor: n,
                        //backgroundColor: r,
                        //padding: 10,
                        itemRadius: 2
                    })
                }

                datasets[label_idx].data.push(point);

                ++row;
                ++i;
            }

            if (graph_i > 0 && (graph_i-1) < graphs.length) {
                graph  = graphs[graph_i-1];
                make_chartjs_boxchart(graph, labels, datasets);
            }
            /*
            if (graph_i < graphs.length) {
                graph  = graphs[graph_i];
                make_chartjs_boxchart(graph, labels, datasets);
                //make_chartjs_box_chart(graph, title, labels, points);
                graph_i++;
            }
            */
        }
    })
}

window.addEventListener('load', render_charts);
