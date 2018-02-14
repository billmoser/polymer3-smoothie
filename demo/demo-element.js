import { Element, html } from '../node_modules/@polymer/polymer/polymer-element.js';
import { afterNextRender } from '../node_modules/@polymer/polymer/lib/utils/render-status.js';
import '../polymer-smoothie.js';

class DemoElement extends Element {
    static get template() { 
        return html `
            <style></style>
            <polymer-smoothie id="chart" 
                on-connected="_onConnected"
                delay="33"
                canvas='{"width": 560, "height": 200}'
                config='{
                    "maxValue": 100,
                    "minValue": 0,
                    "grid": { "strokeStyle": "rgb(125, 0, 0)", "fillStyle": "rgb(60, 0, 0)",
                    "lineWidth": 1, "millisPerLine": 250, "verticalSections": 6 },
                    "labels": { "fillStyle": "rgb(255, 255, 255)" }}'>
            </polymer-smoothie>
            `;
    }
    static get is() { return 'demo-element'; }

    _onConnected(e) {
        let id = e.detail.id;
        afterNextRender(this, () => {
            let smoothie = this.$[id];

            // Add time-series data to the chart
            let line1 = smoothie.newTimeSeries({
                    "strokeStyle": "rgba(0, 255, 0, 1)",
                    "fillStyle": "rgba(0, 0, 0, 0.0)",
                    "lineWidth": 1
                });
            let line2 = smoothie.newTimeSeries({
                    "strokeStyle": "rgba(0, 0, 255, 1)",
                    "fillStyle": "rgba(0, 0, 0, 0.0)",
                    "lineWidth": 1
                });

            // Add a random value to each line every second
            setInterval(function() {
              line1.append(new Date().getTime(), 100*Math.random());
              line2.append(new Date().getTime(), 100*Math.random());
            }, 1000);

        });
    }

}

customElements.define(DemoElement.is, DemoElement);
