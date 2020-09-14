import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog/Dialog";
import { Location } from "history";
import React, { useEffect, useState } from "react";
import { Prompt } from "react-router-dom";

interface Props {
  navigate: (path: string) => void;
  when?: boolean | undefined;
}

const CustomPromptDialog: React.FC<Props> = ({ when, navigate }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [lastLocation, setLastLocation] = useState<Location | null>(null);
  const [confirmedNavigation, setConfirmedNavigation] = useState(false);

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleBlockedNavigation = (nextLocation: Location): boolean => {
    if (!confirmedNavigation) {
      setModalVisible(true);
      setLastLocation(nextLocation);
      return false;
    }
    return true;
  };

  const handleConfirmNavigationClick = () => {
    setModalVisible(false);
    setConfirmedNavigation(true);
  };

  const handleSubmit = () => {
    setConfirmedNavigation(true);
    handleClose();
  };

  useEffect(() => {
    if (confirmedNavigation && lastLocation) {
      navigate(lastLocation.pathname);
    }
  }, [confirmedNavigation, lastLocation]);

  return (
    <>
      <Prompt message={handleBlockedNavigation} />
      <Dialog
        open={modalVisible}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">/homeへ遷移しますか？</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            これはカスタムプロンプトです
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmNavigationClick} color="secondary">
            閉じる
          </Button>
          <Button onClick={handleSubmit} color="primary">
            すすむ
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default CustomPromptDialog;
