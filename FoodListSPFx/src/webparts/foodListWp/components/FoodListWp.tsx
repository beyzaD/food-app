import * as React from "react";
import styles from "./FoodListWp.module.scss";
import { IFoodListWpProps } from "./IFoodListWpProps";
import { escape } from "@microsoft/sp-lodash-subset";

export default class FoodListWp extends React.Component<IFoodListWpProps, {}> {
  public render(): React.ReactElement<IFoodListWpProps> {
    return (
      <div className={styles.foodListWp}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.flexcol}>
                <div className={styles.title}>
                  Welcome to Food List for Food App!
                </div>
                <div className={styles.flexrow}>
                  <img src="https://avatars3.githubusercontent.com/u/16348023?s=460&v=4" />{" "}
                  <div className={styles.subTitle}>
                    A .NET Core Api and Angular UI implemented a Cloud Native
                    App with step by step Installation Scripts used for ngDev,
                    ngAdv, AZ-400, AZ-204 and MS-600
                  </div>
                </div>
                <a
                  href="https://github.com/ARambazamba/FoodApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  <span className={styles.label}>Learn more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
