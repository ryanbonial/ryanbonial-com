<script>
  import { onMount } from "svelte";
  import Chart from "chart.js";

  import Experience from "../data/experience";

  onMount(() => {
    var ctx = document.getElementById("experienceChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: Experience.map(e => e.skill),
        datasets: [
          {
            label: "Experience Level",
            data: Experience.map(e => e.level),
            backgroundColor: "rgba(102, 187, 106, 0.4)",
            borderColor: "rgba(102, 187, 106, 1)",
            borderWidth: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              },
              maxRotation: 90,
              minRotation: 30
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: false
              },
              ticks: {
                beginAtZero: true,
                stepSize: 1,
                callback: value => (["", "Studied it", "Used it", "Know it", "Aww yiss!"])[value]
              }
            }
          ]
        }
      }
    });
  });
</script>

<canvas id="experienceChart" width="500" height="300" class="border-4 border-indigo-500" />
