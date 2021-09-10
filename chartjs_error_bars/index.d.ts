/**
 * chartjs-chart-error-bars
 * https://github.com/sgratzl/chartjs-chart-error-bars
 *
 * Copyright (c) 2021 Samuel Gratzl <samu@sgratzl.com>
 */

import { BarElement, PointElement, ArcElement, BarController, Scale, ChartMeta, Element, UpdateMode, BarControllerDatasetOptions, ScriptableAndArrayOptions, ScriptableContext, Chart, ChartItem, ChartConfiguration, LineController, LineControllerDatasetOptions, ScatterController, ScatterControllerDatasetOptions, PolarAreaController, PolarAreaControllerDatasetOptions } from 'chart.js';

declare class BarWithErrorBar extends BarElement {
    draw(ctx: CanvasRenderingContext2D): void;
    static readonly id = "rectangleWithErrorBar";
    static readonly defaults: any;
    static readonly defaultRoutes: {
        [property: string]: string;
    } | undefined;
    static readonly descriptors: {
        _scriptable: boolean;
        _indexable: (name: string) => boolean;
    };
}

declare class PointWithErrorBar extends PointElement {
    draw(ctx: CanvasRenderingContext2D, area?: any): void;
    static readonly id = "pointWithErrorBar";
    static readonly defaults: any;
    static readonly defaultRoutes: {
        [property: string]: string;
    } | undefined;
    static readonly descriptors: {
        _scriptable: boolean;
        _indexable: (name: string) => boolean;
    };
}

declare class ArcWithErrorBar extends ArcElement {
    draw(ctx: CanvasRenderingContext2D): void;
    static readonly id = "arcWithErrorBar";
    static readonly defaults: any;
    static readonly defaultRoutes: {
        [property: string]: string;
    } | undefined;
    static readonly descriptors: {
        _scriptable: boolean;
        _indexable: (name: string) => boolean;
    };
}

interface IErrorBarOptions {
    errorBarLineWidth: number | {
        v: number[];
    };
    errorBarColor: string | {
        v: string[];
    };
    errorBarWhiskerLineWidth: number | {
        v: number[];
    };
    errorBarWhiskerRatio: number | {
        v: number[];
    };
    errorBarWhiskerSize: number | {
        v: number[];
    };
    errorBarWhiskerColor: string | {
        v: string[];
    };
}

interface IErrorBarXDataPoint {
    x: number;
    xMin: number | number[];
    xMax: number | number[];
}
interface IErrorBarYDataPoint {
    y: number;
    yMin: number | number[];
    yMax: number | number[];
}
interface IErrorBarRDataPoint {
    r: number;
    rMin: number | number[];
    rMax: number | number[];
}
interface IErrorBarXYDataPoint extends IErrorBarXDataPoint, IErrorBarYDataPoint {
}

declare class BarWithErrorBarsController extends BarController {
    getMinMax(scale: Scale, canStack: boolean): {
        min: number;
        max: number;
    };
    parseObjectData(meta: ChartMeta, data: any[], start: number, count: number): Record<string, unknown>[];
    updateElement(element: Element, index: number | undefined, properties: Record<string, unknown>, mode: UpdateMode): void;
    static readonly id = "barWithErrorBars";
    static readonly defaults: any;
    static readonly overrides: any;
    static readonly defaultRoutes: {
        [property: string]: string;
    } | undefined;
}
interface BarWithErrorBarsControllerDatasetOptions extends BarControllerDatasetOptions, ScriptableAndArrayOptions<IErrorBarOptions, ScriptableContext<'barWithErrorBars'>> {
}
declare module 'chart.js' {
    interface ChartTypeRegistry {
        barWithErrorBars: {
            chartOptions: BarControllerChartOptions;
            datasetOptions: BarWithErrorBarsControllerDatasetOptions;
            defaultDataPoint: IErrorBarXDataPoint;
            scales: keyof CartesianScaleTypeRegistry;
            metaExtensions: Record<string, never>;
            parsedDataType: IErrorBarXDataPoint & ChartTypeRegistry['bar']['parsedDataType'];
        };
    }
}
declare class BarWithErrorBarsChart<DATA extends unknown[] = IErrorBarXDataPoint[], LABEL = string> extends Chart<'barWithErrorBars', DATA, LABEL> {
    static id: string;
    constructor(item: ChartItem, config: Omit<ChartConfiguration<'barWithErrorBars', DATA, LABEL>, 'type'>);
}

declare class LineWithErrorBarsController extends LineController {
    getMinMax(scale: Scale, canStack: boolean): {
        min: number;
        max: number;
    };
    parseObjectData(meta: ChartMeta, data: any[], start: number, count: number): Record<string, unknown>[];
    updateElement(element: Element, index: number | undefined, properties: Record<string, unknown>, mode: UpdateMode): void;
    static readonly id = "lineWithErrorBars";
    static readonly defaults: any;
    static readonly overrides: any;
    static readonly defaultRoutes: {
        [property: string]: string;
    } | undefined;
}
interface LineWithErrorBarsControllerDatasetOptions extends LineControllerDatasetOptions, ScriptableAndArrayOptions<IErrorBarOptions, ScriptableContext<'lineWithErrorBars'>> {
}
declare module 'chart.js' {
    interface ChartTypeRegistry {
        lineWithErrorBars: {
            chartOptions: LineControllerChartOptions;
            datasetOptions: LineWithErrorBarsControllerDatasetOptions;
            defaultDataPoint: IErrorBarXDataPoint;
            scales: keyof CartesianScaleTypeRegistry;
            metaExtensions: Record<string, never>;
            parsedDataType: IErrorBarXDataPoint & ChartTypeRegistry['line']['parsedDataType'];
        };
    }
}
declare class LineWithErrorBarsChart<DATA extends unknown[] = IErrorBarXDataPoint[], LABEL = string> extends Chart<'lineWithErrorBars', DATA, LABEL> {
    static id: string;
    constructor(item: ChartItem, config: Omit<ChartConfiguration<'lineWithErrorBars', DATA, LABEL>, 'type'>);
}

declare class ScatterWithErrorBarsController extends ScatterController {
    getMinMax(scale: Scale, canStack: boolean): {
        min: number;
        max: number;
    };
    parseObjectData(meta: ChartMeta, data: any[], start: number, count: number): Record<string, unknown>[];
    updateElement(element: Element, index: number | undefined, properties: Record<string, unknown>, mode: UpdateMode): void;
    static readonly id = "scatterWithErrorBars";
    static readonly defaults: any;
    static readonly overrides: any;
    static readonly defaultRoutes: {
        [property: string]: string;
    } | undefined;
}
interface ScatterWithErrorBarsControllerDatasetOptions extends ScatterControllerDatasetOptions, ScriptableAndArrayOptions<IErrorBarOptions, ScriptableContext<'scatterWithErrorBars'>> {
}
declare module 'chart.js' {
    interface ChartTypeRegistry {
        scatterWithErrorBars: {
            chartOptions: ScatterControllerChartOptions;
            datasetOptions: ScatterWithErrorBarsControllerDatasetOptions;
            defaultDataPoint: IErrorBarXYDataPoint;
            scales: keyof CartesianScaleTypeRegistry;
            metaExtensions: Record<string, never>;
            parsedDataType: IErrorBarXYDataPoint & ChartTypeRegistry['scatter']['parsedDataType'];
        };
    }
}
declare class ScatterWithErrorBarsChart<DATA extends unknown[] = IErrorBarXYDataPoint[], LABEL = string> extends Chart<'scatterWithErrorBars', DATA, LABEL> {
    static id: string;
    constructor(item: ChartItem, config: Omit<ChartConfiguration<'scatterWithErrorBars', DATA, LABEL>, 'type'>);
}

declare class PolarAreaWithErrorBarsController extends PolarAreaController {
    getMinMax(scale: Scale, canStack: boolean): {
        min: number;
        max: number;
    };
    countVisibleElements(): number;
    parseObjectData(meta: ChartMeta, data: any[], start: number, count: number): Record<string, unknown>[];
    updateElement(element: Element, index: number | undefined, properties: Record<string, unknown>, mode: UpdateMode): void;
    updateElements(arcs: Element[], start: number, count: number, mode: UpdateMode): void;
    static readonly id = "polarAreaWithErrorBars";
    static readonly defaults: any;
    static readonly overrides: any;
    static readonly defaultRoutes: {
        [property: string]: string;
    } | undefined;
}
interface PolarAreaWithErrorBarsControllerDatasetOptions extends PolarAreaControllerDatasetOptions, ScriptableAndArrayOptions<IErrorBarOptions, ScriptableContext<'polarAreaWithErrorBars'>> {
}
declare module 'chart.js' {
    interface ChartTypeRegistry {
        polarAreaWithErrorBars: {
            chartOptions: PolarAreaControllerChartOptions;
            datasetOptions: PolarAreaWithErrorBarsControllerDatasetOptions;
            defaultDataPoint: IErrorBarRDataPoint;
            scales: keyof CartesianScaleTypeRegistry;
            metaExtensions: Record<string, never>;
            parsedDataType: IErrorBarRDataPoint & ChartTypeRegistry['polarArea']['parsedDataType'];
        };
    }
}
declare class PolarAreaWithErrorBarsChart<DATA extends unknown[] = IErrorBarRDataPoint[], LABEL = string> extends Chart<'polarAreaWithErrorBars', DATA, LABEL> {
    static id: string;
    constructor(item: ChartItem, config: Omit<ChartConfiguration<'polarAreaWithErrorBars', DATA, LABEL>, 'type'>);
}

export { ArcWithErrorBar, BarWithErrorBar, BarWithErrorBarsChart, BarWithErrorBarsController, BarWithErrorBarsControllerDatasetOptions, IErrorBarRDataPoint, IErrorBarXDataPoint, IErrorBarXYDataPoint, IErrorBarYDataPoint, LineWithErrorBarsChart, LineWithErrorBarsController, LineWithErrorBarsControllerDatasetOptions, PointWithErrorBar, PolarAreaWithErrorBarsChart, PolarAreaWithErrorBarsController, PolarAreaWithErrorBarsControllerDatasetOptions, ScatterWithErrorBarsChart, ScatterWithErrorBarsController, ScatterWithErrorBarsControllerDatasetOptions };
