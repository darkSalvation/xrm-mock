import * as XrmMock from "../xrm-mock/index";
import Attribute from "./attribute";
import Context from "./context";
import Control from "./control";
import EventContext from "./eventcontext";
import Form from "./form";
import FormContext from "./formcontext";
import WebApi from "./webapi";

declare var global: any;

export class XrmMockGenerator {
  public static EventContext: EventContext = new EventContext();
  public static FormContenxt: FormContext = new FormContext();
  public static Attribute: Attribute = new Attribute();
  public static Context: Context = new Context();
  public static Control: Control = new Control();
  public static Form: Form = new Form();
  public static WebApi: WebApi = new WebApi();

  public static context: XrmMock.ContextMock;
  public static formContext: XrmMock.FormContextMock;
  public static eventContext: XrmMock.EventContextMock;

  public static initialise(components?: IXrmGeneratorComponents): XrmMock.XrmStaticMock {
    components = components || {};

    this.context = Context.createContext();
    this.formContext = FormContext.createFormContext(components.entity);
    this.eventContext = EventContext.createEventContext(components.entity);

    const xrm = new XrmMock.XrmStaticMock({
      page: new XrmMock.PageMock(
        this.context,
        this.formContext,
      ),
      webApi: WebApi.createApi(this.context.client),
    });

    if (typeof global === "undefined") {
      window.Xrm = xrm;
    } else {
      global.Xrm = xrm;
    }
    return xrm;
  }

  public static getEventContext(): XrmMock.EventContextMock {
    return this.eventContext;
  }

  public static getFormContext(): XrmMock.FormContextMock {
    return this.formContext;
  }
}

export interface IXrmGeneratorComponents {
  entity?: XrmMock.IEntityComponents;
}
