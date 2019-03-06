
import React, {
  Component,
} from 'react';

import {
  EuiPopover,
  EuiPopoverTitle,
  EuiFieldSearch,
  EuiFilterSelectItem,
  EuiLoadingChart,
  EuiSpacer,
  EuiIcon,
  EuiFilterGroup,
  EuiFilterButton,
} from '../../../../src/components';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopoverOpen: false,
      isFilterOn: false,
      isOnFilterOn: false,
      isOffFilterOn: false,
    };
  }

  toggleFilter = () => {
    this.setState(prevState => ({
      isFilterOn: !prevState.isFilterOn,
    }));
  }

  toggleOnFilter = () => {
    this.setState(prevState => ({
      isOnFilterOn: !prevState.isOnFilterOn,
      isOffFilterOn: prevState.isOffFilterOn && !prevState.isOnFilterOn ? false : prevState.isOffFilterOn,
    }));
  }

  toggleOffFilter = () => {
    this.setState(prevState => ({
      isOffFilterOn: !prevState.isOffFilterOn,
      isOnFilterOn: prevState.isOnFilterOn && !prevState.isOffFilterOn ? false : prevState.isOnFilterOn,
    }));
  }

  onButtonClick() {
    this.setState({
      isPopoverOpen: !this.state.isPopoverOpen,
    });
  }

  closePopover() {
    this.setState({
      isPopoverOpen: false,
    });
  }

  render() {

    const items = [
      { name: 'Johann Sebastian Bach', checked: 'on' },
      { name: 'Wolfgang Amadeus Mozart', checked: 'on' },
      { name: 'Antonín Dvořák', checked: 'off' },
      { name: 'Dmitri Shostakovich' },
      { name: 'Felix Mendelssohn-Bartholdy' },
      { name: 'Franz Liszt' },
      { name: 'Franz Schubert' },
      { name: 'Frédéric Chopin' },
      { name: 'Georg Friedrich Händel' },
      { name: 'Giuseppe Verdi' },
      { name: 'Gustav Mahler' },
      { name: 'Igor Stravinsky' },
      { name: 'Johannes Brahms' },
      { name: 'Joseph Haydn' },
      { name: 'Ludwig van Beethoven' },
      { name: 'Piotr Illitch Tchaïkovsky' },
      { name: 'Robert Schumann' },
      { name: 'Sergej S. Prokofiew' },
      { name: 'Wolfgang Amadeus Mozart' },
    ];

    const button = (
      <EuiFilterButton
        iconType="arrowDown"
        onClick={this.onButtonClick.bind(this)}
        isSelected={this.state.isPopoverOpen}
        numFilters={items.length}
        hasActiveFilters={true}
        numActiveFilters={2}
        grow={true}
      >
        Composers
      </EuiFilterButton>
    );

    return (
      <EuiFilterGroup>
        <EuiFilterButton hasActiveFilters={this.state.isFilterOn} onClick={this.toggleFilter}>
          Filter
        </EuiFilterButton>
        <EuiFilterButton noDivider hasActiveFilters={this.state.isOnFilterOn} onClick={this.toggleOnFilter}>
          On
        </EuiFilterButton>
        <EuiFilterButton hasActiveFilters={this.state.isOffFilterOn} onClick={this.toggleOffFilter}>
          Off
        </EuiFilterButton>
        <EuiPopover
          id="popover"
          ownFocus
          button={button}
          isOpen={this.state.isPopoverOpen}
          closePopover={this.closePopover.bind(this)}
          panelPaddingSize="none"
          withTitle
        >
          <EuiPopoverTitle>
            <EuiFieldSearch />
          </EuiPopoverTitle>
          <div className="euiFilterSelect__items">
            {items.map((item, index) => (
              <EuiFilterSelectItem
                checked={item.checked}
                key={index}
              >
                {item.name}
              </EuiFilterSelectItem>
            ))}
            {/*
              Use when loading items initially
            */}
            <div className="euiFilterSelect__note">
              <div className="euiFilterSelect__noteContent">
                <EuiLoadingChart size="m" />
                <EuiSpacer size="xs" />
                <p>Loading filters</p>
              </div>
            </div>
            {/*
              Use when no results are returned
            */}
            <div className="euiFilterSelect__note">
              <div className="euiFilterSelect__noteContent">
                <EuiIcon type="minusInCircle" />
                <EuiSpacer size="xs" />
                <p>No filters found</p>
              </div>
            </div>
          </div>
        </EuiPopover>
      </EuiFilterGroup>
    );
  }
}
