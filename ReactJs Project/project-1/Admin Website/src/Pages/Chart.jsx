import React from "react";

function Chart() {
  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h2>Morris Charts</h2>
              <h5>Welcome Jainik Rami , Love to see you back. </h5>
            </div>
          </div>
          {/* /. ROW  */}
          <hr />
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="panel panel-default">
                <div className="panel-heading">Bar Chart Example</div>
                <div className="panel-body">
                  <div id="morris-bar-chart" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="panel panel-default">
                <div className="panel-heading">Area Chart Example</div>
                <div className="panel-body">
                  <div id="morris-area-chart" />
                </div>
              </div>
            </div>
          </div>
          {/* /. ROW  */}
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="panel panel-default">
                <div className="panel-heading">Donut Chart Example</div>
                <div className="panel-body">
                  <div id="morris-donut-chart" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="panel panel-default">
                <div className="panel-heading">Line Chart Example</div>
                <div className="panel-body">
                  <div id="morris-line-chart" />
                </div>
              </div>
            </div>
          </div>
          {/* /. ROW  */}
        </div>
        {/* /. PAGE INNER  */}
      </div>
      {/* /. PAGE WRAPPER  */}
    </div>
  );
}

export default Chart;
