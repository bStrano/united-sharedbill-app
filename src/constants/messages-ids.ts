import {en_us} from '../../assets/langs/en_us';

/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
class MessagesIds {
  private static instance: MessagesIds;
  // @ts-ignore
  public ids: typeof en_us = {};

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {
    console.log("Setup Messages Ids Singleton")
    let ids: any = {};
    Object.keys(en_us).forEach(item => {
      console.log(item);
      // @ts-ignore
      ids[item] = item;
    });
    this.ids = ids;
  }

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): MessagesIds {
    if (!MessagesIds.instance) {
      MessagesIds.instance = new MessagesIds();
    }

    return MessagesIds.instance;
  }
}

const MESSAGES = MessagesIds.getInstance();
export {MESSAGES};
