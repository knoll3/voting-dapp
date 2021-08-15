import React from "react";
import { useStyles } from "./styles";
import {
    Box,
    Button,
    Dialog,
    Divider,
    TextField,
    Typography,
} from "@material-ui/core";

interface VoterDialogProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (address: string) => void;
    title: string;
    actionText?: string;
    helperText?: string;
}

export const VoterDialog: React.FC<VoterDialogProps> = ({
    open,
    onClose,
    onSubmit,
    title,
    actionText,
    helperText,
}) => {
    const classes = useStyles();

    const [address, setAddress] = React.useState("");

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
    };

    return (
        <Dialog onClose={onClose} open={open}>
            <div className={classes.dialog}>
                <Box m={1} ml={2}>
                    <Typography variant="subtitle1">{title}</Typography>
                </Box>
                <Divider />
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mt={9}
                    mb={9}
                    flexDirection="column"
                >
                    <Box mb={3} width={325}>
                        <Typography color="textSecondary">
                            {helperText || ""}
                        </Typography>
                    </Box>
                    <TextField
                        value={address}
                        onChange={onChangeInput}
                        className={classes.textfield}
                        size="small"
                        label="Address"
                        variant="outlined"
                    />
                </Box>
                <Divider />
                <Box display="flex" justifyContent="flex-end" p={2}>
                    <Box mr={3}>
                        <Button
                            variant="contained"
                            size="small"
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                    </Box>
                    <Box>
                        <Button
                            variant="contained"
                            size="small"
                            onClick={() => onSubmit(address)}
                        >
                            {actionText || "Submit"}
                        </Button>
                    </Box>
                </Box>
            </div>
        </Dialog>
    );
};
