import { Element, html } from '../node_modules/@polymer/polymer/polymer-element.js';
import { template } from './polymer-smoothie_template.js';

/**
 *  Wrapper for SmoothieCharts real-time graphing library (http://smoothiecharts.org)
 *
 *  @demo demo/index.html
 */
class PolymerSmoothie extends Element {
    static get template() { return html([`${template}`]); }
    static get is() { return 'polymer-smoothie'; }

    static get properties() {
        return {
            canvas: Object,
            chart: Object,
            config: {
                type: Object,
                value: function() { return {}; }
            },
            delay: {
                type: Number,
                value: 100
            }
        }
    }

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

    newTimeSeries(style) {
        var result = new TimeSeries();
        this.chart.addTimeSeries(result, style);
        return result;
    }

    chartOptions(options) {
        for (let key in options) {
            this.chart.options[key] = options[key];
        }
    }

}

customElements.define(PolymerSmoothie.is, PolymerSmoothie);
