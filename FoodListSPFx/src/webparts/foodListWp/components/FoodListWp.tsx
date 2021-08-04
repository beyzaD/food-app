import * as React from 'react';
import styles from './FoodListWp.module.scss';
import { IFoodListWpProps } from './IFoodListWpProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class FoodListWp extends React.Component<IFoodListWpProps, {}> {
  public render(): React.ReactElement<IFoodListWpProps> {
    return (
      <div className={ styles.foodListWp }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
