import { Element, html } from '../node_modules/@polymer/polymer/polymer-element.js';
import { template } from './polymer-smoothie_template.js';

/**
 *  Wrapper for SmoothieCharts real-time graphing library (http://smoothiecharts.org)
 *
 *  #### Example
 *       <polymer-smoothie id="chart" 
 *           on-connected="_onConnected"
 *           delay="33"
 *           canvas='{"width": 560, "height": 200}'
 *           config='{
 *               "maxValue": 100,
 *               "minValue": 0,
 *               "grid": { "strokeStyle": "rgb(125, 0, 0)", "fillStyle": "rgb(60, 0, 0)",
 *               "lineWidth": 1, "millisPerLine": 250, "verticalSections": 6 },
 *               "labels": { "fillStyle": "rgb(255, 255, 255)" }}'>
 *       </polymer-smoothie>
 *
 *  @customElement
 *  @polymer
 *  @demo demo/index.html
 */
class PolymerSmoothie extends Element {
    static get template() { return html([`${template}`]); }
    static get is() { return 'polymer-smoothie'; }

    static get properties() {
        return {
            /** The canvas containing the chart. */
            canvas: Object,
            /** 
             * The smoothie chart.  This can be directly manipulated using the
             * api described at http://smoothiecharts.org
             */
            chart: Object,
            /**
             * The chart's configuration, a JSON string
             */
            config: {
                type: Object,
                value: function() { return {}; }
            },
            /**
             * The charts delay.  For smoothing purposes -- see the original
             * api docs for more information.
             */
            delay: {
                type: Number,
                value: 100
            }
        }
    }

    /**
     * Create the chart amnd dispatch `connected` event with
     * `detail: {id: this.id}` to indicate the event source
     *
     * @event connected
     */
    connectedCallback() {
        super.connectedCallback();
        this.chart = new SmoothieChart(this.config);
        this.chart.streamTo(this.$.canvas, this.delay);
        this.dispatchEvent(new CustomEvent('connected', 
            {
                bubbles: true,
                composed: true,
                detail: {id: this.id}
            }));
    }

    /**
     * Create a new time series object, and add it to the chart.
     * 
     * @param {String} JSON style info for the result.
     *
     * @return {Object} The new `TimeSeries` object.
     */
    newTimeSeries(style) {
        var result = new TimeSeries();
        this.chart.addTimeSeries(result, style);
        return result;
    }

    /**
     * Specify configuratuion options for the chart.
     *
     * @param {String} JSON config for the chart.
     */
    chartOptions(options) {
        for (let key in options) {
            this.chart.options[key] = options[key];
        }
    }

}

customElements.define(PolymerSmoothie.is, PolymerSmoothie);
