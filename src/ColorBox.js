import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ColorBoxStyles';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true });
    setTimeout(() => this.setState({ copied: false }), 1500);
  }

  render() {
    const {
      name,
      background,
      paletteId,
      id,
      moreUrl,
      showingFullPalette,
      classes
    } = this.props;

    const { copied } = this.state;
    // console.log(chroma(background).luminance());
    //white is 1
    //black is 0
    // console.log(chroma(this.props.background).luminance());
    // console.log('no props', chroma(background).luminance());

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className={classes.ColorBox}>
          <div
            style={{ background }}
            // className={`${classes.copyOverlay} ${copied &&
            //   classes.showOverlay}`}
            // always show copyOverlay
            // only show showOverlay if copied is true
            // classeNames is an npm module
            className={classNames(classes.copyOverlay, {
              [classes.showOverlay]: copied
            })}
          />
          <div
            // className={`${classes.copyMessage} ${copied &&
            //   classes.showMessage}`}
            className={classNames(classes.copyMessage, {
              [classes.showMessage]: copied
            })}
          >
            <h1>copied</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>
                {name} {/*chroma(background).luminance()*/}
              </span>
            </div>
            <button className={classes.copyButton}>copy</button>
          </div>
          {showingFullPalette && (
            <Link
              // could constuct the route here or just pass down a prop with the
              // link already constructed

              // to={`/palette/${paletteId}/${id}`}
              to={moreUrl}
              onClick={e => e.stopPropagation()}
            >
              <span className={classes.seeMore}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
