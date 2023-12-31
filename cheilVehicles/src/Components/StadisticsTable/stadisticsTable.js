import React from "react";
import "./table.css";

function StadisticsTable({  stadisticsData, avgData }) {

  return (
    <div>
      <div className="container-table-modal">
        <div className="action-table-topbar">
          Desviation standard stadistics
        </div>
        <table className="action-table" role="table">
          <thead className="table-head">
            <tr>
              <th>Compactness</th>
              <th>Circularity</th>
              <th>Distance Circularity</th>
              <th>Radius Ratio</th>
              <th>Pr. Axis Aspect Ratio</th>
              <th>Max. Length Aspect Ratio</th>
              <th>Scatter Ratio</th>
              <th>Elongatedness</th>
              <th>Pr. Axis Rectangularity</th>
              <th>Max. Length Rectangularity</th>
              <th>Scaled Variance</th>
              <th>Scaled Variance.1</th>
              <th>Scaled Radius of Gyration</th>
              <th>Scaled Radius of Gyration.1</th>
              <th>Skewness About</th>
              <th>Skewness About.1</th>
              <th>Skewness About.2</th>
              <th>Hollows Ratio</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody className="tbody-data">
            {stadisticsData?.map((item, index) => (
              <tr key={index}>                
                <td>{item.compactness.toFixed(3)}</td>
                <td>{item.circularity.toFixed(3)}</td>
                <td>{item.distance_circularity.toFixed(3)}</td>
                <td>{item.radius_ratio.toFixed(3)}</td>
                <td>{item['pr.axis_aspect_ratio'].toFixed(3)}</td>
                <td>{item['max.length_aspect_ratio'].toFixed(3)}</td>
                <td>{item.scatter_ratio.toFixed(3)}</td>
                <td>{item.elongatedness.toFixed(3)}</td>
                <td>{item['pr.axis_rectangularity'].toFixed(3)}</td>
                <td>{item['max.length_rectangularity'].toFixed(3)}</td>
                <td>{item.scaled_variance.toFixed(3)}</td>
                <td>{item['scaled_variance.1'].toFixed(3)}</td>
                <td>{item.scaled_radius_of_gyration.toFixed(3)}</td>
                <td>{item['scaled_radius_of_gyration.1'].toFixed(3)}</td>
                <td>{item.skewness_about.toFixed(3)}</td>
                <td>{item['skewness_about.1'].toFixed(3)}</td>
                <td>{item['skewness_about.2'].toFixed(3)}</td>
                <td>{item.hollows_ratio.toFixed(3)}</td>
                <td>{item.class}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container-table-modal">
        <div className="action-table-topbar center">
          Statistics average
        </div>
        <table className="action-table" role="table">
          <thead className="table-head">
            <tr>
              <th>Compactness</th>
              <th>Circularity</th>
              <th>Distance Circularity</th>
              <th>Radius Ratio</th>
              <th>Pr. Axis Aspect Ratio</th>
              <th>Max. Length Aspect Ratio</th>
              <th>Scatter Ratio</th>
              <th>Elongatedness</th>
              <th>Pr. Axis Rectangularity</th>
              <th>Max. Length Rectangularity</th>
              <th>Scaled Variance</th>
              <th>Scaled Variance.1</th>
              <th>Scaled Radius of Gyration</th>
              <th>Scaled Radius of Gyration.1</th>
              <th>Skewness About</th>
              <th>Skewness About.1</th>
              <th>Skewness About.2</th>
              <th>Hollows Ratio</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody className="tbody-data">
            {avgData?.map((item, index) => (
              <tr key={index}>
                <td>{item.compactness.toFixed(3)}</td>
                <td>{item.circularity.toFixed(3)}</td>
                <td>{item.distance_circularity.toFixed(3)}</td>
                <td>{item.radius_ratio.toFixed(3)}</td>
                <td>{item['pr.axis_aspect_ratio'].toFixed(3)}</td>
                <td>{item['max.length_aspect_ratio'].toFixed(3)}</td>
                <td>{item.scatter_ratio.toFixed(3)}</td>
                <td>{item.elongatedness.toFixed(3)}</td>
                <td>{item['pr.axis_rectangularity'].toFixed(3)}</td>
                <td>{item['max.length_rectangularity'].toFixed(3)}</td>
                <td>{item.scaled_variance.toFixed(3)}</td>
                <td>{item['scaled_variance.1'].toFixed(3)}</td>
                <td>{item.scaled_radius_of_gyration.toFixed(3)}</td>
                <td>{item['scaled_radius_of_gyration.1'].toFixed(3)}</td>
                <td>{item.skewness_about.toFixed(3)}</td>
                <td>{item['skewness_about.1'].toFixed(3)}</td>
                <td>{item['skewness_about.2'].toFixed(3)}</td>
                <td>{item.hollows_ratio.toFixed(3)}</td>
                <td>{item.class}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StadisticsTable;
